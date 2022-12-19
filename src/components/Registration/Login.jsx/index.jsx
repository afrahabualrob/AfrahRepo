import React, { useState, useRef } from "react";
import styles from "./style.module.css";
import RegisterButton from "../RegisterButton";
import axios from "axios";
import { Grid } from "@mui/material";
import { Cookies, useCookies } from "react-cookie";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  TextField,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Login = ({ setOpen }) => {
  const [msg, setMsg] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [user, setUser] = useState({ showPassword: false });
  const [userToken, setUserToken] = useCookies();

  const isValidEmail = (email) => {
    return email ? /\S+@\S+\.\S+/.test(email) : true;
  };

  const handleEmailChange = (event) => {
    setUser({ ...user, email: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setUser({ ...user, password: event.target.value });
  };

  const disabledBtn = () => {
    return (
      user.email.length === 0 &&
      user.password.length === 0 &&
      !isValidEmail(user.email)
    );
  };

  const loginSubmission = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://restapi.adequateshop.com/api/authaccount/login",
      user
    );

    if (res.data.data !== null) setUserToken("Token", res.data.data.Token);

    emailRef.current.value = "";
    passwordRef.current.value = "";
    if (res.data.data !== null) {
      setMsg("Successful Login");
      setTimeout(() => {
        setOpen(false);
      }, 1000);
    } else setMsg("Your email or password is incorrect.");
  };

  const handleClickShowPassword = (event) => {
    event.preventDefault();
    setUser({
      ...user,
      showPassword: !user.showPassword,
    });
  };

  return (
    <form className={styles.form}>
      <div>
        <h4 className={styles.loginLabel}>Login</h4>
        <Grid
          container
          flexDirection="column"
          justifyContent="center"
          rowSpacing={3}
        >
          <Grid item>
            <TextField
              className={styles.loginInput}
              inputRef={emailRef}
              label="Email"
              variant="standard"
              onChange={handleEmailChange}
              error={!isValidEmail(user.email)}
              helperText={!isValidEmail(user.email) ? "oops invalid Email" : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl className={styles.loginInput}>
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                inputRef={passwordRef}
                label="pass"
                variant="standard"
                required
                type={user.showPassword ? "text" : "password"}
                onChange={handlePasswordChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {user.showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item>
            <RegisterButton
              value="login"
              loginSubmission={loginSubmission}
              disabledBtn={disabledBtn}
            />
            <span className={styles.errorMsg}>{msg}</span>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default Login;
