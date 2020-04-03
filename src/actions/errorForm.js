export const USER_FORM_ERRORS = "USER_FORM_ERRORS";

export const setUserFormErrors = (errors = []) => ({
  type: USER_FORM_ERRORS,
  errors
});
