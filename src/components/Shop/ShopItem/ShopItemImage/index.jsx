import React from "react";
import styles from "./style.module.css";

const ShopItemImage = ({ category_img, category }) => {
  return (
    <img src={category_img} alt={category} className={styles.shopItemImage} />
  );
};

export default ShopItemImage;
