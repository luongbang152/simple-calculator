import { StyleProp, ViewStyle } from 'react-native';
import { ReactNode } from 'react';

export type ApplicationState = {
	session: AppSession;
};

export type AppSession = {
	firstTimeAt?: number;
};

export type NumberPadType = 'number' | 'expression' | 'action';
export type NumberPadItem = {
	type: NumberPadType;
	title?: string;
	icon?: (size: number) => ReactNode;
	expression?: string;
	columns?: number;
	action?: () => void;
	buttonStyle?: StyleProp<ViewStyle>;
};
