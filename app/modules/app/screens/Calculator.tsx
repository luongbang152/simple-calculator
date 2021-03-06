import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import KeyEvent from 'react-native-keyevent';

import R from 'res/R';
import { NumberPadItem, ApplicationState } from 'schema';
import defaultLayout, {
	supportedKeyboardNumber,
	supportedKeyboardOperation,
} from 'config/NumberPadLayout';
import { addNumberPad } from 'app-redux/actions';
import { MathHelper } from 'helpers';

import { NumberPad, ResultDisplay } from '../components';

export default function Calculator() {
	const dispatch = useDispatch();
	const currentExpression = useSelector(
		(state: ApplicationState) => state.currentExpression,
	);
	const [numberPadItems] = useState<NumberPadItem[][]>(defaultLayout());

	const onPressNumberPad = (n: NumberPadItem) => {
		dispatch(addNumberPad(n));
	};

	useEffect(() => {
		KeyEvent.onKeyUpListener(({ pressedKey }) => {
			console.log(`Key: ${pressedKey}`);
			if (pressedKey === '\r') {
				onPressNumberPad({ type: 'operation', expression: '=' });
				return;
			}
			if (supportedKeyboardNumber.indexOf(pressedKey) !== -1) {
				onPressNumberPad({ type: 'number', expression: pressedKey });
				return;
			}
			if (supportedKeyboardOperation.indexOf(pressedKey) !== -1) {
				onPressNumberPad({ type: 'operation', expression: pressedKey });
				return;
			}
		});

		return () => {
			KeyEvent.removeKeyUpListener();
		};
	}, []);

	return (
		<View style={[R.styles.fillFlex, styles.container]}>
			<SafeAreaView style={[R.styles.fillFlex, styles.safeContainer]}>
				<ResultDisplay text={MathHelper.numberToDisplay(currentExpression)} />
				<NumberPad items={numberPadItems} onPress={onPressNumberPad} />
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#000',
	},
	safeContainer: {
		backgroundColor: '#000',
	},
});
