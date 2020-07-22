import AsyncStorage from '@react-native-community/async-storage';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { ApplicationState } from 'schema';
import reducers from './reducers';

const persistedReducer = persistReducer<ApplicationState>(
	{
		key: 'root',
		storage: AsyncStorage,
		stateReconciler: autoMergeLevel2,
		whitelist: ['session'],
	},
	reducers,
);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
