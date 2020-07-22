import React, { useEffect } from 'react';
import { View } from 'react-native';

import R from 'res/R';
import { Navigator } from 'navigation';
import { openFirstTime } from 'app-redux/actions';

export default function Splash() {
	useEffect(() => {
		setTimeout(() => {
			Navigator.openApp();
		}, 500);
	}, []);

	return (
		<View
			style={[
				R.styles.fillFlex,
				{
					backgroundColor: R.colors.primary,
				},
			]}
		/>
	);
}
