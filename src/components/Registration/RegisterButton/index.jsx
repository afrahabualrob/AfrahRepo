import React from "react";
import styles from "./style.module.css";

const RegisterButton = ({ value, loginSubmission, disabledBtn }) => {
  return (
    <button
      className={styles.registerButton}
      onClick={loginSubmission}
      // disabled={disabledBtn}
    >
      {value}
    </button>
  );
};

export default RegisterButton;
