import defaultImage from '../components/ProfileImage/blank-profile-picture-973460_960_720.png';

const initialState = {
    userDetails: {
        name: 'Augustus Demetrius',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed tincidunt turpis, eget auctor nunc.',
        title: 'Fullstack web developer',
        level: 'Middle 1',
        phone: '+40123456789',
        address: '56, Main Avenue, St. Johns, MI 456738, United States',
    },
    imagePreviewUrl: defaultImage,

};

const user = (state = initialState, action) => {
    const newState = { ...state };
    if (action.type === 'SUBMIT_FORM') {
        newState.userDetails = action.payload;
        return newState;
    }
    if (action.type === 'UPLOAD_PHOTO') {
        newState.imagePreviewUrl = action.imagePreviewUrl;
        return newState;
    }

    return newState;
};
export default user;


// import defaultImage from '../components/ProfileImage/blank-profile-picture-973460_960_720.png';

// const initialState = {
//     imagePreviewUrl: defaultImage,
// };

// const imageReducer = (state = initialState, action) => {
//     const newState = { ...state };
//     if (action.type === 'UPLOAD_PHOTO') {
//         newState.imagePreviewUrl = action.imagePreviewUrl;
//         return newState;
//     }
//     return newState;
// };
// export default imageReducer;

