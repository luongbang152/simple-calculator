import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import R from 'res/R';
import { NumberPadItem } from 'schema';

export default function defaultLayout() {
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

	const operationButtonStyle: StyleProp<ViewStyle> = {
		backgroundColor: R.colors.operationButtonBgColor,
	};

	const OperationAdd: NumberPadItem = {
		type: 'expression',
		icon: (size) => (
			<FontAwesome5
				name="plus"
				size={size}
				color={R.colors.operationButtonIconColor}
			/>
		),
		buttonStyle: operationButtonStyle,
	};

	const OperationMinus: NumberPadItem = {
		type: 'expression',
		icon: (size) => (
			<FontAwesome5
				name="minus"
				size={size}
				color={R.colors.operationButtonIconColor}
			/>
		),
		buttonStyle: operationButtonStyle,
	};

	const OperationMultiply: NumberPadItem = {
		type: 'expression',
		icon: (size) => (
			<FontAwesome5
				name="times"
				size={size}
				color={R.colors.operationButtonIconColor}
			/>
		),
		buttonStyle: operationButtonStyle,
	};

	const OperationDivide: NumberPadItem = {
		type: 'expression',
		icon: (size) => (
			<FontAwesome5
				name="divide"
				size={size}
				color={R.colors.operationButtonIconColor}
			/>
		),
		buttonStyle: operationButtonStyle,
	};

	const OperationCalc: NumberPadItem = {
		type: 'action',
		icon: (size) => (
			<FontAwesome5
				name="equals"
				size={size}
				color={R.colors.operationButtonIconColor}
			/>
		),
		buttonStyle: operationButtonStyle,
		action: () => {
			// calc
		},
	};

	/**
	 * Number
	 */
	const Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ','].map<NumberPadItem>(
		(n) => {
			return {
				type: 'number',
				title: `${n}`,
				columns: n === 0 ? 2 : 1,
				expression: n === ',' ? '.' : `${n}`,
			};
		},
	);

	return [
		[ClearAction, OperationDivide],
		[Numbers[7], Numbers[8], Numbers[9], OperationMultiply],
		[Numbers[4], Numbers[5], Numbers[6], OperationMinus],
		[Numbers[1], Numbers[2], Numbers[3], OperationAdd],
		[Numbers[0], Numbers[10], OperationCalc],
	];
}
