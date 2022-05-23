import React, { useEffect } from "react";
import "./Alert.css";

const Alert = ({ type, msg, showAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, []);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
