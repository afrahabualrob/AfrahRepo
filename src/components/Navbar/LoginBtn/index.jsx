import React from "react";
import styles from "./style.module.css";
import { useCookies } from "react-cookie";
import LoggedUser from "../LoggedUser";
import {
  Dialog,
  DialogContent,
  Toolbar,
  IconButton,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Login from "../../Registration/Login.jsx";
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
        <Toolbar>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
        <DialogContent>
          <Login setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginBtn;
