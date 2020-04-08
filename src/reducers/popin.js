import { Record } from 'immutable';

const InitialState = new Record({
    colorBox: ''
});

const popin = (state = new InitialState(), action) => {

    switch (action.type) {
        case 'ACTIVE_COLOR_BOX': {
            return state.set('colorBox', action.colorBox);
        }
        default:
            return state;
    }
};

export default popin;
