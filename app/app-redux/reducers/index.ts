import { combineReducers } from 'redux';
import { ApplicationState } from 'schema';
import sessionReducer from './sessionReducer';

export default combineReducers<ApplicationState>({
	session: sessionReducer,
});
