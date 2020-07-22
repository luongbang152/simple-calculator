import { Dimensions, Platform } from 'react-native';
const ExtraDimensions = require('react-native-extra-dimensions-android');

let screenHeight = -1;
let screenWidth = -1;

export const getDeviceHeight = () => {
	if (screenHeight === -1) {
		screenHeight =
			Dimensions.get('window').height -
			(Platform.OS === 'android' && ExtraDimensions.isSoftMenuBarEnabled()
				? ExtraDimensions.getSoftMenuBarHeight()
				: 0);
	}
	return screenHeight;
};

export const getDeviceWidth = () => {
	if (screenWidth === -1) {
		screenWidth = Dimensions.get('window').width;
	}
	return screenWidth;
};

export const getScreenSize = () => {
	const height = getDeviceHeight();
	const width = getDeviceWidth();
	return { height, width };
};

export const getSizeRatio = () => {
	return getDeviceWidth() / 360;
};
