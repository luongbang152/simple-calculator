import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

import { Touchable } from 'uikit';
import R from 'res/R';

type Props = {
	style?: StyleProp<ViewStyle>;
	title?: string;
	icon?: ReactNode;
	onPress: () => void;
};

export default function NumberButton({ style, title, icon, onPress }: Props) {
	return (
		<Touchable
			style={[R.styles.fillFlex, styles.container, style]}
			onPress={onPress}>
			<View style={[R.styles.fillFlex, R.styles.centerizeContent]}>
				{icon ? icon() : <Text style={styles.numberText}>{title}</Text>}
			</View>
		</Touchable>
	);
}

const styles = StyleSheet.create({
	container: {},
	numberText: {
		color: R.colors.numberPadTextColor,
	},
});
