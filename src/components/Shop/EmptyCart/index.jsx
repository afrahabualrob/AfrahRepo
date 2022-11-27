import { Button } from "@mui/material";
import React from "react";
import styles from "./style.module.css";

const EmptyCart = () => {
  return (
    <section className={styles.emptyCart}>
      <div>
        <img src="./assets/images/emptyCart.png" width="200" hight="200" />
        <h6 className={styles.description}>
          No products have been added to your cart yet
        </h6>
        <div className={styles.center}>
          <button className={styles.shoppingBtn}> Start shopping now</button>
        </div>
        <div className={styles.center}>
          <button className={styles.loginBtn}>login</button>
        </div>
      </div>
    </section>
  );
};

export default EmptyCart;
