import { Record } from 'immutable';

const InitialState = new Record({
    color1: '7e57c2',
    color2: '5c6bc0',
});

const colorReducer = (state = new InitialState(), action) => {
    switch (action.type) {
        case 'CHANGE_COLOR': {
            return state.set([action.colorProp], action.hexColor);
        }
        default:
            return state;
    }
};

export default colorReducer;
