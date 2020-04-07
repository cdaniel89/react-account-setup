import { Record } from 'immutable';

const InitialState = new Record({
	colorBox1: false,
	colorBox2: false,
});

const popinReducer = (state = new InitialState(), action) => {
	switch (action.type) {
		case 'ACTIVE_COLOR_PICKER': {
			return state.set([action.colorProp], action.active);
		}
		default:
			return state;
	}
};

export default popinReducer;
