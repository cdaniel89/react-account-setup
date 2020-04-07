const initialState = {
    name: 'Augustus Demetrius',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed tincidunt turpis, eget auctor nunc.',
    title: 'Fullstack web developer',
    level: 'Middle 1',
    phone: '+40123456789',
    address: '56, Main Avenue, St. Johns, MI 456738, United States',
};

const userReducer = (state = initialState, { type, payload }) => {
    const newState = { ...state };
    if (type === 'SUBMIT_FORM') {
        return { ...newState, ...payload };
    }

    return newState;
};
export default userReducer;
