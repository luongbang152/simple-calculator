import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import R from 'res/R';
import { NumberPadItem } from 'schema';

export const ClearAction: NumberPadItem = {
	type: 'action',
	title: 'clear',
	columns: 3,
	action: 'clear',
};

/**
 * Operation
 */

export const operationButtonStyle: StyleProp<ViewStyle> = {
	backgroundColor: R.colors.operationButtonBgColor,
};

export const OperationAdd: NumberPadItem = {
	type: 'operation',
	icon: (size) => (
		<FontAwesome5
			name="plus"
			size={size}
			color={R.colors.operationButtonIconColor}
		/>
	),
	buttonStyle: operationButtonStyle,
	expression: '+',
};

export const OperationMinus: NumberPadItem = {
	type: 'operation',
	icon: (size) => (
		<FontAwesome5
			name="minus"
			size={size}
			color={R.colors.operationButtonIconColor}
		/>
	),
	buttonStyle: operationButtonStyle,
	expression: '-',
};

export const OperationMultiply: NumberPadItem = {
	type: 'operation',
	icon: (size) => (
		<FontAwesome5
			name="times"
			size={size}
			color={R.colors.operationButtonIconColor}
		/>
	),
	buttonStyle: operationButtonStyle,
	expression: '*',
};

export const OperationDivide: NumberPadItem = {
	type: 'operation',
	icon: (size) => (
		<FontAwesome5
			name="divide"
			size={size}
			color={R.colors.operationButtonIconColor}
		/>
	),
	buttonStyle: operationButtonStyle,
	expression: '/',
};

export const OperationCalc: NumberPadItem = {
	type: 'operation',
	icon: (size) => (
		<FontAwesome5
			name="equals"
			size={size}
			color={R.colors.operationButtonIconColor}
		/>
	),
	buttonStyle: operationButtonStyle,
	expression: '=',
};

/**
 * Number
 */
export const Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.'].map<NumberPadItem>(
	(n) => {
		return {
			type: 'number',
			title: `${n}`,
			columns: n === 0 ? 2 : 1,
			expression: `${n}`,
		};
	},
);

export const supportedKeyboardNumber = '0123456789.';
export const supportedKeyboardOperation = '+-*/=';

export default function defaultLayout() {
	return [
		[ClearAction, OperationDivide],
		[Numbers[7], Numbers[8], Numbers[9], OperationMultiply],
		[Numbers[4], Numbers[5], Numbers[6], OperationMinus],
		[Numbers[1], Numbers[2], Numbers[3], OperationAdd],
		[Numbers[0], Numbers[10], OperationCalc],
	];
}
