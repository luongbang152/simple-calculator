import React from 'react';
import { View, StyleSheet } from 'react-native';

import NumberButton from './NumberButton';
import R from 'res/R';
import { getDeviceWidth } from 'config/Metrics';
import { NumberPadItem } from 'schema';

type Props = {
	items: NumberPadItem[][];
	onPress: (n: NumberPadItem) => void;
};

export default function NumberPad({ items, onPress }: Props) {
	return (
		<View style={styles.container}>
			{items.map((row, index) => (
				<View key={`r${index}`} style={[R.styles.fillFlex, styles.numberRow]}>
					{row.map((n, i) => (
						<NumberButton
							key={`c${i}`}
							style={n.columns ? { flex: n.columns } : undefined}
							title={n.title}
							icon={n.icon}
							onPress={() => {
								onPress(n);
							}}
						/>
					))}
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: getDeviceWidth(),
		height: getDeviceWidth(),
	},
	numberRow: {
		flexDirection: 'row',
	},
});
