import React from "react";
import styles from "./style.module.css";

const ShopItemButton = ({ url }) => {
  return (
    <a href={url} className={styles.shopItemBtn}>
      Shop Now
    </a>
  );
};

export default ShopItemButton;
