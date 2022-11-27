import React from "react";
import styles from "./style.module.css";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import RegisterInput from "./RegisterInput";

const Registration = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.main}>
        <input
          type="checkbox"
          className={styles.chk}
          id="chk"
          aria-hidden="true"
        />

        <div className={styles.signUp}>
          <SignUp />
        </div>
        <div className={styles.login}>
          <Login />
        </div>
      </div>
    </section>
  );
};

export default Registration;
