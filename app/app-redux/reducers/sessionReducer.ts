import { AppSession } from 'schema';
import { SESSION_UPDATE, SessionUpdate } from '../actions';

const initState: AppSession = {};

export default function (state = initState, action: SessionUpdate) {
	switch (action.type) {
		case SESSION_UPDATE: {
			return { ...state, ...action.session };
		}
		default:
			return state;
	}
}
