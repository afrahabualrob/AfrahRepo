import React from "react";
import styles from "./style.module.css";
import { Grid, Typography } from "@mui/material";
import { useShoppingCart } from "../../../Context/ShoppingCartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartQuantity = ({ id, quantity, availableQuantity }) => {
  const {
    decreaseCartQuantity,
    increaseCartQuantity,
  } = useShoppingCart();

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={styles.wrapper}
    >
      <Grid item xs={4}>
        <button
          className={styles.plusMinus}
          onClick={() => decreaseCartQuantity(id)}
          disabled={quantity <= 1}
        >
          <RemoveIcon />
        </button>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle1" className={styles.quantityNumber}>
          {quantity}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <button
          className={styles.plusMinus}
          onClick={() => increaseCartQuantity(id, 1)}
          disabled={quantity >= availableQuantity}
        >
          <AddIcon />
        </button>
      </Grid>
    </Grid>

    // </div>
  );
};

export default CartQuantity;
