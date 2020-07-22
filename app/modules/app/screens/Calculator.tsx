import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import R from 'res/R';
import { NumberPadItem } from 'schema';
import { defaultLayout } from 'config/NumberPadLayout';

import { NumberPad, ResultDisplay } from '../components';

export default function Calculator() {
	const [numberPadItems] = useState<NumberPadItem[][]>(defaultLayout);

	return (
		<View style={[R.styles.fillFlex, styles.container]}>
			<SafeAreaView style={[R.styles.fillFlex, styles.safeContainer]}>
				<ResultDisplay text="000" />
				<NumberPad
					items={numberPadItems}
					onPress={(n) => {
						console.log('Pressed button', n);
						// do something
					}}
				/>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#000',
	},
	safeContainer: {
		backgroundColor: '#FFF',
	},
});
