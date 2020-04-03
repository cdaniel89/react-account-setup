const initialState = {
  errors: []
};

const errorReducer = (state = initialState, { type, errors }) => {
  const newState = { ...state };

  if (type === "USER_FORM_ERRORS") {
    return { ...newState, ...errors };
  }

  return newState;
};
export default errorReducer;
