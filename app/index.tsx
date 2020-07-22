import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { AppContainer } from 'navigation';
import { store, persistor } from './app-redux';

export default function app() {
	// init anything
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<AppContainer />
			</PersistGate>
		</Provider>
	);
}
