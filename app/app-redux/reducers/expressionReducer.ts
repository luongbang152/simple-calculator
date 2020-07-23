import { EXPRESSION_UPDATE, ExpressionUpdate } from '../actions';

const initState: string = '0';

export default function (state = initState, action: ExpressionUpdate) {
	switch (action.type) {
		case EXPRESSION_UPDATE: {
			return action.expression;
		}
		default:
			return state;
	}
}
