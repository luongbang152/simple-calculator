import { StyleProp, ViewStyle } from 'react-native';
import { ReactNode } from 'react';

export type ApplicationState = {
	currentExpression: string;
};

export type NumberPadType = 'number' | 'operation' | 'action';
export type NumberPadItem = {
	type: NumberPadType;
	title?: string;
	icon?: (size: number) => ReactNode;
	expression?: string;
	columns?: number;
	action?: 'clear';
	buttonStyle?: StyleProp<ViewStyle>;
};
