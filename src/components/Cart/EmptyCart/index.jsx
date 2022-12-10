import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import Login from "../../Registration/Login.jsx/index.jsx";
import { useCookies } from "react-cookie";
import {
  Dialog,
  DialogContent,
  Toolbar,
  IconButton,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const EmptyCart = ({ closeCart }) => {
  const [cookie, setCookie] = useCookies();
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen = () => {
    setOpen1(true);
  };
  const handleClose = () => {
    setOpen1(false);
  };
  const swapToLogin = () => {
    closeCart();
    handleClickOpen();
  };
  return (
    <section className={styles.emptyCart}>
      <div>
        <img src="/assets/images/emptyCart.png" width="200" hight="200" />
        <h6 className={styles.description}>
          No products have been added to your cart yet
        </h6>
        <div className={styles.center}>
          {/* <button className={styles.shoppingBtn}>
            <Link to="/"> Start shopping now </Link>
          </button> */}
        </div>
        {"Token" in cookie ? (
          <></>
        ) : (
          <div className={styles.center}>
            <button className={styles.loginBtn} onClick={swapToLogin}>
              login
            </button>
            <Dialog open={open1} onClose={handleClose}>
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
                <Login setOpen={setOpen1} />
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    </section>
  );
};

export default EmptyCart;
