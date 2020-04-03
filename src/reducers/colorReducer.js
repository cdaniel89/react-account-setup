import { Record } from "immutable";

const InitialState = new Record({
  color1: "7e57c2",
  color2: "5c6bc0"
});

const colorReducer = (state = new InitialState(), action) => {
  switch (action.type) {
    case "CHANGE_COLOR": {
      return state.set([action.colorProp], action.hexColor);
    }
    default:
      return state;
  }
};

export default colorReducer;

// const initialState = {
//   color1: "7e57c2",
//   color2: "5c6bc0"
// };

// const colorReducer = (state = initialState, action) => {
//   const newState = { ...state };
//   if (action.type === "CHANGE_COLOR1") {
//     newState.color1 = action.color1;

//     return newState;
//   }
//   if (action.type === "CHANGE_COLOR2") {
//     newState.color2 = action.color2;
//     return newState;
//   }
//   return newState;
// };
// export default colorReducer;
