import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import R from 'res/R';
import { getScreenSize } from 'config/Metrics';
import { ApplicationState } from 'schema';
import { Navigator } from 'navigation';
import { openFirstTime } from 'app-redux/actions';

export default function Splash() {
	const screenSize = getScreenSize();
	const dispatch = useDispatch();
	const session = useSelector((state: ApplicationState) => state.session);

	useEffect(() => {
		if (session.firstTimeAt) {
			setTimeout(() => {
				Navigator.openApp();
			}, 1000);
		} else {
			dispatch(openFirstTime());
		}
	}, [session.firstTimeAt]);

	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				backgroundColor: R.colors.primary,
			}}>
			<View style={{ flex: 1 }} />
			<Image
				source={R.images.appLogo}
				style={{
					tintColor: '#FFF',
					width: screenSize.width / 3,
					height: screenSize.width / 3,
					resizeMode: 'contain',
				}}
			/>
			<View style={{ flex: 2 }} />
		</View>
	);
}
