import React from "react";
import styles from "./style.module.css";

const ProductTitle = ({ title }) => {
  return <p className={styles.productCartTitle}>{title}</p>;
};

export default ProductTitle;
