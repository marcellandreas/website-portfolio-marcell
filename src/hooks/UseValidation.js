import { useState } from "react";

export const useValidation = (validate) => {
  const [errors, setErrors] = useState({});

  const validateForm = (data) => {
    const validationErrors = validate(data);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  return { errors, validateForm };
};
