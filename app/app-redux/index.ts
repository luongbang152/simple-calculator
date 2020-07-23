import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';

export const store = __DEV__
	? createStore(
			reducers,
			compose(applyMiddleware(thunk), applyMiddleware(logger)),
	  )
	: createStore(reducers, applyMiddleware(thunk));
