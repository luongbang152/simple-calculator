import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import R from 'res/R';
import { ApplicationState } from 'schema';
import { Navigator } from 'navigation';
import { openFirstTime } from 'app-redux/actions';

export default function Splash() {
	const dispatch = useDispatch();
	const session = useSelector((state: ApplicationState) => state.session);

	useEffect(() => {
		if (session.firstTimeAt) {
			setTimeout(() => {
				Navigator.openApp();
			}, 500);
		} else {
			dispatch(openFirstTime());
			// other initialization
		}
	}, [session.firstTimeAt]);

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
