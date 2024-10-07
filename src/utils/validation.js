export const validateContactForm = (data) => {
  let errors = {};

  if (!data.name) {
    errors.name = "Name is required";
  }

  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is invalid";
  }

  if (!data.subject) {
    errors.subject = "Subject is required";
  }

  if (!data.message) {
    errors.message = "Message is required";
  }

  return errors;
};
