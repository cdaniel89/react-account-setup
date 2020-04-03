import defaultImage from "../components/ProfileImage/blank-profile-picture-973460_960_720.png";

const initialState = {
  imagePreviewUrl: defaultImage
};

const imageReducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === "UPLOAD_PHOTO") {
    newState.imagePreviewUrl = action.imagePreviewUrl;
    return newState;
  }
  return newState;
};
export default imageReducer;
