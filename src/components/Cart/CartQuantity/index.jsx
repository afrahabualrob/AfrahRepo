import React, { useState } from "react";
import styles from "./style.module.css";
import { useShoppingCart } from "../../../Context/ShoppingCartContext";

const CartQuantity = ({ id,quantity }) => {
  const { decreaseCartQuantity, increaseCartQuantity} = useShoppingCart();

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.plusMinus}
        onClick={() => decreaseCartQuantity(id)}
        disabled={quantity<=1}
      >
        -
      </button>
      <span className={styles.num}>{quantity} </span>
      <button
        className={styles.plusMinus}
        onClick={() => increaseCartQuantity(id)}
      >
        +
      </button>
    </div>
  );
};

export default CartQuantity;
