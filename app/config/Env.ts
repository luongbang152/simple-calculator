import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import { getScreenSize } from './Metrics';

export const bundleID = DeviceInfo.getBundleId();
export const appVersion = DeviceInfo.getVersion();
export const appBuildNumber = DeviceInfo.getBuildNumber();
export const systemName = DeviceInfo.getSystemName();
export const systemVersion = DeviceInfo.getVersion();
export const deviceID = DeviceInfo.getDeviceId();
export const deviceUniqueID = DeviceInfo.getUniqueId();
export const deviceIsTablet = DeviceInfo.isTablet();
export const iPhoneWithNotch = DeviceInfo.hasNotch() && Platform.OS === 'ios';

export const isAndroid = Platform.OS == 'android';

export const isSmallScreenDevice = () => {
	const screenSize = getScreenSize();
	return !deviceIsTablet && screenSize.width / screenSize.height >= 2 / 3;
};

export const isDebug = __DEV__;
