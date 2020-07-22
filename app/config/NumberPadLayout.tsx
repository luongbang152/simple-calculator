import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { NumberPadItem } from 'schema';

const ClearAction: NumberPadItem = {
	type: 'action',
	title: 'clear',
	columns: 3,
	action: () => {
		// clear expression
	},
};

/**
 * Operation
 */
const OperationAdd: NumberPadItem = {
	type: 'expression',
	icon: () => <FontAwesome5 name="plus" />,
};

const OperationMinus: NumberPadItem = {
	type: 'expression',
	icon: () => <FontAwesome5 name="minus" />,
};

const OperationMultiply: NumberPadItem = {
	type: 'expression',
	icon: () => <FontAwesome5 name="times" />,
};

const OperationDivide: NumberPadItem = {
	type: 'expression',
	icon: () => <FontAwesome5 name="divide" />,
};

const OperationCalc: NumberPadItem = {
	type: 'action',
	icon: () => <FontAwesome5 name="equals" />,
	action: () => {
		// calc
	},
};

/**
 * Number
 */
const Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ','].map<NumberPadItem>((n) => {
	return {
		type: 'number',
		title: `${n}`,
		columns: n === 0 ? 2 : 1,
		expression: n === ',' ? '.' : `${n}`,
	};
});

export const defaultLayout: NumberPadItem[][] = [
	[ClearAction, OperationDivide],
	[Numbers[7], Numbers[8], Numbers[9], OperationMultiply],
	[Numbers[4], Numbers[5], Numbers[6], OperationMinus],
	[Numbers[1], Numbers[2], Numbers[3], OperationAdd],
	[Numbers[0], Numbers[10], OperationCalc],
];
