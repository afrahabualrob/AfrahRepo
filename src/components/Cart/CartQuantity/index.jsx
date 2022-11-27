import React, { useState } from "react";
import styles from "./style.module.css";
import { useShoppingCart } from "../../../Context/ShoppingCartContext";

const CartQuantity = ({ id }) => {
  const { decreaseCartQuantity } = useShoppingCart();
  const { increaseCartQuantity } = useShoppingCart();
  const [quantity, setQuantity] = useState(0);

  const handleMinus = () => {
    setQuantity(quantity - 1);
  };
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.plusMinus}
        onClick={() => decreaseCartQuantity(id)}
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
