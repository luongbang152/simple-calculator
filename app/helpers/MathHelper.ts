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

	if (haveOperation(currentExp) && item.type === 'operation') {
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
				result = result.toFixed(4);
			}
			const operationToAdd = item.expression === '=' ? '' : item.expression;
			return `${result}${operationToAdd}`;
		}
	}
	return `${currentExp}${item.expression}`;
};

export const haveOperation = (expression: string) => {
	return expression.match(/[^$,.\d]/) ? true : false;
};

export const numberToDisplay = (expression: string) => {
	const numbers = expression.split(/[^$,.\d]/).filter((n) => n !== '');
	if (numbers.length == 0) {
		return '0';
	}
	const lastNum = numbers[numbers.length - 1];
	const num = Number(lastNum);
	return `${num}`;
};
