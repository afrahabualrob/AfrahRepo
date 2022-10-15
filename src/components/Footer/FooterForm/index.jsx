import React, { useState } from "react";
import styles from "./style.module.css";
import TextField from "@mui/material/TextField";

const FooterForm = () => {
  const [email, setEmail] = useState("");

  const isValidEmail = (email) => {
    return email ? /\S+@\S+\.\S+/.test(email) : true;
  };

  return (
    <form className={styles.footerContact}>
      <TextField
        error={!isValidEmail(email)}
        onChange={(event) => setEmail(event.target.value)}
        id="outlined-error-helper-text"
        placeholder="Enter your email"
        helperText={!isValidEmail(email) ? "oops invalid Email" : ""}
        color="secondary"
        size="small"
        inputProps={{
          className: styles.emailTextField,

          sx: {
            "&::placeholder": {
              color: "white ",
              fontSize: "14PX",
              fontWeight: 500,
            },
          },
        }}
        sx={{
          backgroundColor: "transparent",
          borderRadius: 4,
          height: "100%",
          padding: " 0!important",
          width: "65%",
        }}
      />

      <button type="submit" className={styles.subscribeBtn}>
        Subscribe
      </button>
    </form>
  );
};

export default FooterForm;
