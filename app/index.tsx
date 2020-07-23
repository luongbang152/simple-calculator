import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import { AppContainer } from 'navigation';
import { store } from './app-redux';

export default function app() {
	// init anything
	return (
		<Provider store={store}>
			<AppContainer />
		</Provider>
	);
}
