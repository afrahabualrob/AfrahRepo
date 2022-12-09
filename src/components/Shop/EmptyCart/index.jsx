import { Dialog, DialogContent } from "@mui/material";
import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import Login from "../../Registration/Login.jsx";

const EmptyCart = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <section className={styles.emptyCart}>
      <div>
        <img src="./assets/images/emptyCart.png" width="200" hight="200" />
        <h6 className={styles.description}>
          No products have been added to your cart yet
        </h6>
        <div className={styles.center}>
          {/* <Link to="shop">
            <button className={styles.shoppingBtn}> Start shopping now</button>
          </Link> */}
        </div>
        <div className={styles.center}>
          <button className={styles.loginBtn} onClick={handleClickOpen}>
            login
          </button>
          <Dialog open={open} onClose={handleClose}>
            <DialogContent>
              <Login />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default EmptyCart;
