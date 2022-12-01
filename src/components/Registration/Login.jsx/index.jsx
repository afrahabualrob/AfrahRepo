import React, { useEffect, useState, useRef } from "react";
import styles from "./style.module.css";
import RegisterButton from "../RegisterButton";
import { useCookies } from "react-cookie";
import axios from "axios";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [user, setUser] = useState({});
  const [userToken, setUserToken] = useCookies();

  const handleEmailChange = (event) => {
    setUser({ ...user, email: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setUser({ ...user, password: event.target.value });
  };

  const loginSubmission = async (e) => {
    console.log(user);
    e.preventDefault();
    const res = await axios.post(
      "http://restapi.adequateshop.com/api/authaccount/login",
      user
    );

    if (res.data.data !== null) 
    setUserToken("Token", res.data.data.Token);

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <form>
      <label htmlFor="chk" aria-hidden="true" className={styles.loginLabel}>
        Login
      </label>
      <input
        ref={emailRef}
        type="text"
        name="email"
        placeholder="Email"
        required
        className={styles.registerInput}
        onChange={handleEmailChange}
      />
      {/* <p>{ t.data.data.email}</p> */}
      <input
        ref={passwordRef}
        type="password"
        name="password"
        placeholder="Password"
        required
        className={styles.registerInput}
        onChange={handlePasswordChange}
      />

      <RegisterButton value="login" loginSubmission={loginSubmission} />
    </form>
  );
};

export default Login;
