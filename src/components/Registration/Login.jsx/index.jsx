import React, { useEffect, useState, useRef } from "react";
import styles from "./style.module.css";
import RegisterButton from "../RegisterButton";
import axios from "axios";
import { Grid, Typography } from "@mui/material";
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

  const handleEmailChange = (event) => {
    setUser({ ...user, email: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setUser({ ...user, password: event.target.value });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const loginSubmission = async (e) => {
    console.log(user);
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
      setOpen(false);
    } else setMsg("Your email or password is incorrect.");
  };

  const handleClickShowPassword = () => {
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
              ref={emailRef}
              label="Email"
              variant="standard"
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl className={styles.loginInput}>
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                ref={passwordRef}
                helperText=" "
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
                      onMouseDown={handleMouseDownPassword}
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
            <RegisterButton value="login" loginSubmission={loginSubmission} />
            <span className={styles.errorMsg}>{msg}</span>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default Login;
