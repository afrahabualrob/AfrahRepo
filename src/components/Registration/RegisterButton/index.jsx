import React from "react";
import styles from "./style.module.css";

const RegisterButton = ({ value, loginSubmission }) => {
  return (
    <button className={styles.registerButton} onClick={loginSubmission}>
      {value}
    </button>
  );
};

export default RegisterButton;
