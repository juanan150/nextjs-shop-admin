import { useState } from "react";

export const useAlert = (options) => {
  const defaultOptions = {
    active: false,
    message: "",
    type: "",
    autoClose: true,
  };

  const [alert, setAlert] = useState({
    ...defaultOptions,
    options,
  });

  const toggleAlert = () => {
    setAlert(!alert.active);
  };

  return {
    alert,
    setAlert,
    toggleAlert,
  };
};
