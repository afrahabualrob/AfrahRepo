import React from "react";
import styles from "./style.module.css";
import RegisterButton from "../RegisterButton";
import RegisterInput from "../RegisterInput";

const SignUp = () => {
  return (
    <form>
      <label for="chk" aria-hidden="true" className={styles.signUpLabel}>
        Sign up
      </label>
      <RegisterInput type="text" name="user name" />
      <RegisterInput type="email" name="email" />
      <RegisterInput type="password" name="password" />
      <RegisterButton value="signup" />
    </form>
  );
};

export default SignUp;
