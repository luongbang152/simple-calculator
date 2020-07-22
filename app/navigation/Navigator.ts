import {
	NavigationContainerRef,
	StackActions,
	NavigationState,
} from '@react-navigation/native';

import { ParamList } from './ParamList';

let _navigator: NavigationContainerRef;
let _navigationInitialized = false;
let _callback: () => void = null;
let _retryTimeout: number = null;
let _currentRouteName: string = '';

const navigate = (name: keyof ParamList, params?: object) => {
	if (_navigator && _navigationInitialized)
		_navigator.dispatch(StackActions.push(name, params));
	else {
		console.log('Navigator is not initialized, retry in 1000ms');
		_retryTimeout = setTimeout(() => {
			if (_retryTimeout) clearTimeout(_retryTimeout);
			navigate(name, params);
		}, 1000);
	}
};

const getActiveRouteName = (state) => {
	const route = state.routes[state.index];

	if (route.state) {
		// Dive into nested navigators
		return getActiveRouteName(route.state);
	}

	return route.name;
};

export default {
	initialize: (navigatorRef: NavigationContainerRef) => {
		_navigator = navigatorRef;
	},
	goBack: (needExecuteCb = false) => {
		_navigator?.dispatch(StackActions.pop());
		if (needExecuteCb && _callback != null) {
			_callback();
		}
	},
	navigatorInitialized: (initialized: boolean) => {
		_navigationInitialized = initialized;
	},
	handleStateChanged: (state: NavigationState | undefined) => {
		const previousRouteName = _currentRouteName;
		const currentRouteName = getActiveRouteName(state);

		if (previousRouteName !== currentRouteName) {
			// The line below uses the @react-native-firebase/analytics tracker
			// Change this line to use another Mobile analytics SDK
			// analytics().setCurrentScreen(currentRouteName, currentRouteName);
		}

		// Save the current route name for later comparision
		_currentRouteName = currentRouteName;
	},

	/**
	 * Module App
	 */
	openApp: () => {
		_navigator?.dispatch(StackActions.replace('Calculator'));
	},
	// openMap: () => {
	// 	navigate('Map');
	// },
	// openPackageDownload: () => {
	// 	navigate('PackageDownload');
	// },
	// openAdvancedScan: (scanList: Array<WiFi>) => {
	// 	navigate('AdvancedScan', { scanList });
	// },
};
