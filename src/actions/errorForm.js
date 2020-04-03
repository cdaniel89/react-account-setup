export const USER_FORM_ERRORS = "USER_FORM_ERRORS";

export const setUserFormErrors = (payload = []) => ({
  type: USER_FORM_ERRORS,
  payload
});
