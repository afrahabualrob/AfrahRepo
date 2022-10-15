import React from "react";
import styles from "./style.module.css";

const ProductPrice = ({ price }) => {
  return <p className={styles.productCardPrice}>{price} $</p>;
};

export default ProductPrice;
