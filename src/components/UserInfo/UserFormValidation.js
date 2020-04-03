export const userFormValidate = formData => {
  const errors = [];
  if (formData.name.length === 0) {
    errors.push("Name is required");
  }
  if (formData.description.length === 0) {
    errors.push("Description is required");
  }
  if (formData.phone.length === 0) {
    errors.push("Phone is required");
  }
  var regex = /^\+([0-9]{1})\)?[-.\s]?([0-9]{4})?[-.\s]?([0-9]{3})[-.\s]?([0-9]{3})$/;
  if (formData.phone.length > 0 && !new RegExp(regex).test(formData.phone)) {
    errors.push("Invalid phone number");
  }
  if (formData.address.length === 0) {
    errors.push("Address is required");
  }

  return errors;
};
