import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useShoppingCart } from "../../../Context/ShoppingCartContext";
import styles from "./style.module.css";
import { Grid, IconButton, Divider, Stack } from "@mui/material";
import CartQuantity from "../CartQuantity";
import { formatCurrency } from "../../../utilities/formatCurrency";

const CartItem = ({ id, quantity }) => {
  const { removeFromCart, cartItems, productsJson } = useShoppingCart();
  const item = productsJson.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack spacing={2}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        // sx={{ padding: "8px 0 !important" }}
      >
        <Grid
          item
          // xs={4}
        >
          <div className={styles.wrapper}>
            <img className={styles.cardItemImage} src={item.image} />
          </div>
          <span className={styles.cardItemTitle}>{item.title}</span>
        </Grid>
        <Grid
          item
          // xs={2}
        >
          <CartQuantity
            id={id}
            quantity={quantity}
            availableQuantity={item.availableQuantity}
          />
        </Grid>

        <Grid
          item
          // xs={2}
        >
          <span className={styles.cardItemPrice}>
            {formatCurrency(item.price)}
          </span>
        </Grid>

        <Grid item>
          <span>{formatCurrency(item.price * quantity)}</span>
        </Grid>
        <Grid item>
          <IconButton
            className={styles.deleteBtn}
            variant="outline-danger"
            size="sm"
            onClick={() => removeFromCart(item.id)}
            aria-label="delete Item from Cart"
          >
            <DeleteIcon color="error" />
          </IconButton>
        </Grid>
      </Grid>

      <Divider />
    </Stack>
  );
};

export default CartItem;
