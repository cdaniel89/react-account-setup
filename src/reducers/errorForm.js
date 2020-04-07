const initialState = {
    errors: [],
};

const error = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_FORM_ERRORS': {
            const newState = { ...state };
            return { ...newState, ...action.errors };
        }
        case 'USER_FORM_ERROR_ITEM_REMOVE': {
            const tempErrors = { ...state };
            tempErrors.errors.splice(action.index, 1);
            return tempErrors;
        }
        default:
            return state;
    }
};
export default error;
