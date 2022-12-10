import React from "react";
import styles from "./style.module.css";
import { formatCurrency } from "../../../utilities/formatCurrency";

const ProductPrice = ({ price }) => {
  return <p className={styles.productCardPrice}>{formatCurrency(price)} </p>;
};

export default ProductPrice;
