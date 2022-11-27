import React from "react";
import styles from "./style.module.css";
import RegisterButton from "../RegisterButton";
import RegisterInput from "../RegisterInput";

const Login = () => {
  return (
    <form>
      <label for="chk" aria-hidden="true" className={styles.loginLabel}>
        Login
      </label>
      <RegisterInput type="email" name="email" />
      <RegisterInput type="password" name="password" />
      <RegisterButton value="login" />
    </form>
  );
};

export default Login;
