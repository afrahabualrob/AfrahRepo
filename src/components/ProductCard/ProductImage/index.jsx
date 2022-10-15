import React from "react";
import styles from "./style.module.css";

const ProductPrice = ({ imgSrc, title }) => {
  return <img className={styles.productCardImage} src={imgSrc} alt={title} />;
};

export default ProductPrice;
