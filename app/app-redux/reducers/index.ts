import { combineReducers } from 'redux';
import { ApplicationState } from 'schema';
import expressionReducer from './expressionReducer';

export default combineReducers<ApplicationState>({
	currentExpression: expressionReducer,
});
