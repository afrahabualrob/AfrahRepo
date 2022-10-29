import React, { useState } from "react";
import styles from "./style.module.css";
import { Grid } from "@mui/material";

const DialogProductQuantity = ({ availableQuantity }) => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className={styles.quantityWrapper}>
      <div className={styles.quantity}>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={4}>
            <button
              className={styles.quantityBtn}
              disabled={quantity <= 1}
              onClick={decreaseQuantity}
            >
              <img src="./assets/icons/minus.svg" alt="plus" />
            </button>
          </Grid>
          <Grid item xs={4}>
            <label className={styles.quantityNumber}>{quantity}</label>
          </Grid>
          <Grid item xs={4}  >
            <button
              className={styles.quantityBtn}
              onClick={increaseQuantity}
              disabled={quantity >= availableQuantity}
            >
              <img src="./assets/icons/plus2.svg" alt="plus" />
            </button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DialogProductQuantity;
