import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

import { Touchable } from 'uikit';
import R from 'res/R';
import { getSizeRatio } from 'config/Metrics';

type Props = {
	style?: StyleProp<ViewStyle>;
	title?: string;
	icon?: () => ReactNode;
	onPress: () => void;
};

export default function NumberButton({ style, title, icon, onPress }: Props) {
	const ratio = getSizeRatio();
	const iconSize = 20 * ratio;
	const fontSize = 30 * ratio;

	return (
		<Touchable
			style={[R.styles.fillFlex, styles.container, style]}
			onPress={onPress}>
			<View style={[R.styles.fillFlex, R.styles.centerizeContent]}>
				{icon ? (
					icon(iconSize)
				) : (
					<Text style={[styles.numberText, { fontSize }]}>{title}</Text>
				)}
			</View>
		</Touchable>
	);
}

const styles = StyleSheet.create({
	container: {
		borderWidth: 0.5,
		borderColor: R.colors.numberPadBorderColor,
	},
	numberText: {
		color: R.colors.numberPadTextColor,
	},
});
