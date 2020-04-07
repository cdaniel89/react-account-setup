export const USER_FORM_ERRORS = 'USER_FORM_ERRORS';

export const setUserFormErrors = (errors = []) => ({
	type: USER_FORM_ERRORS,
	errors,
});

export const USER_FORM_ERROR_ITEM_REMOVE = 'USER_FORM_ERROR_ITEM_REMOVE';

export const removeErrorItem = (index) => ({
	type: USER_FORM_ERROR_ITEM_REMOVE,
	index,
});
