import { evaluate } from 'mathjs';

import { NumberPadItem } from 'schema';

export const addItemToExpression = (
	currentExp: string,
	item: NumberPadItem,
) => {
	if (item.type === 'action') {
		return '';
	}

	if (currentExp === '' || currentExp === 'error') {
		return item.type === 'number' ? item.expression : '';
	}

	const hadOperation = haveOperation(currentExp);
	if (hadOperation && item.type === 'operation') {
		// check last char is operation or not
		if (haveOperation(currentExp.charAt(currentExp.length - 1))) {
			const removedOperation = currentExp.slice(0, currentExp.length - 1);
			const operationToAdd = item.expression === '=' ? '' : item.expression;
			return `${removedOperation}${operationToAdd}`;
		} else {
			let result: number = evaluate(currentExp);
			if (result === Infinity) {
				return 'error';
			}
			if (result > parseInt(result)) {
				result = Number(result.toFixed(3));
			}
			const operationToAdd = item.expression === '=' ? '' : item.expression;
			return `${result}${operationToAdd}`;
		}
	}
	if (item.expression === '.') {
		let lastNumber = currentExp;
		if (hadOperation) {
			const numbers = splitExpIntoNumbers(currentExp);
			if (numbers[1] === '') {
				return `${currentExp}0${item.expression}`;
			} else {
				lastNumber = numbers[1];
			}
		}
		const haveDot = lastNumber.indexOf('.') !== -1;
		if (haveDot) {
			return `${currentExp}`;
		}
	}
	return `${currentExp}${item.expression}`;
};

export const haveOperation = (expression: string) => {
	return expression.match(/[^$,.\d]/) ? true : false;
};

export const numberToDisplay = (expression: string) => {
	if (expression === 'error') {
		return 'error';
	}
	const numbers = splitExpIntoNumbers(expression).filter((n) => n !== '');
	if (numbers.length == 0) {
		return '0';
	}
	const lastNum = numbers[numbers.length - 1];
	const haveDot = lastNum.charAt(lastNum.length - 1) === '.';
	const num = Number(lastNum);
	const resultDisplay = `${num}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	return haveDot ? `${resultDisplay}.` : resultDisplay;
};

const splitExpIntoNumbers = (expression: string) => {
	return expression.split(/[^$,.\d]/);
};
