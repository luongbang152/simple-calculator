import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import R from 'res/R';

type Props = {
	text: string;
};

export default function ResultDisplay({ text }: Props) {
	return (
		<View style={[R.styles.fillFlex, styles.container]}>
			<Text style={styles.text}>{text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: R.colors.backgroundDark,
		paddingHorizontal: 16,
		paddingVertical: 10,
		minHeight: 200,
		justifyContent: 'flex-end',
	},
	text: {
		fontSize: 50,
		color: R.colors.resultTextColor,
		textAlign: 'right',
		flexWrap: 'wrap',
	},
});
