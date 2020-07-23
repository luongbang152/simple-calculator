import { NumberPadItem } from 'schema';
import { MathHelper } from 'helpers';

export const EXPRESSION_UPDATE = 'numberPad/Add';
export type EXPRESSION_UPDATE = typeof EXPRESSION_UPDATE;
export interface ExpressionUpdate {
	type: EXPRESSION_UPDATE;
	expression: string;
}

const updateExpression = (expression: string): ExpressionUpdate => {
	return { type: EXPRESSION_UPDATE, expression };
};

export const addNumberPad = (item: NumberPadItem) => {
	return (dispatch, getState) => {
		if (item.type == 'action') {
			switch (item.action) {
				case 'clear':
					dispatch(updateExpression(''));
			}
			return;
		}
		const currentExpression = getState().currentExpression;
		const nextExpression = MathHelper.addItemToExpression(
			currentExpression,
			item,
		);
		console.log('Next Exp', nextExpression);
		dispatch(updateExpression(nextExpression));
	};
};
