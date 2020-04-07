export const USER_FORM_SUBMIT = 'SUBMIT_FORM';

export const submitUserForm = (payload) => ({
    type: USER_FORM_SUBMIT,
    payload,
});

export const UPLOAD_PHOTO = 'UPLOAD_PHOTO';

export const uploadPhoto = (imagePreviewUrl) => ({
    type: UPLOAD_PHOTO,
    imagePreviewUrl,
});
