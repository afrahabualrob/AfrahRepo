import { Dialog, DialogContent } from "@mui/material";
import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import Login from "../../Registration/Login.jsx/index.jsx";
import { useCookies } from "react-cookie";

const EmptyCart = ({ closeCart }) => {
  const [cookie, setCookie] = useCookies();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const swapToLogin = () => {
    setOpen(true);
    closeCart();
  };
  return (
    <section className={styles.emptyCart}>
      <div>
        <img src="/assets/images/emptyCart.png" width="200" hight="200" />
        <h6 className={styles.description}>
          No products have been added to your cart yet
        </h6>
        <div className={styles.center}>
          {/* <Link to="/">
            <button className={styles.shoppingBtn}> Start shopping now</button>
          </Link> */}
        </div>
        {"Token" in cookie ? (
          <></>
        ) : (
          <div className={styles.center}>
            <button className={styles.loginBtn} onClick={swapToLogin}>
              login
            </button>
            <Dialog open={open} onClose={handleClose}>
              <DialogContent>
                <Login />
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    </section>
  );
};

export default EmptyCart;
