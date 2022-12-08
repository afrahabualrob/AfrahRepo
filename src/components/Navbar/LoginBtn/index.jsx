import React from "react";
import styles from "./style.module.css";
import { useCookies } from "react-cookie";
import LoggedUser from "../LoggedUser";
import { Dialog, DialogContent, Button } from "@mui/material";
import Registration from "../../Registration";

const LoginBtn = () => {
  const [cookie, setCookie] = useCookies();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {"Token" in cookie ? (
        <LoggedUser />
      ) : (
        <button className={styles.loginBtn} onClick={handleClickOpen}>
          login
        </button>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Registration />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginBtn;
