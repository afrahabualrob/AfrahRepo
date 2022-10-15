import React from "react";
import styles from "./style.module.css";
import ProductTitle from "../ProductCard/ProductTitle";
import ProductPrice from "../ProductCard/ProductPrice";
import ProductImage from "../ProductCard/ProductImage";
import ViewButton from "../Featured/ViewButton";
import NewLabel from "../ProductCard/NewLabel";

const ProductCard = ({ productItem }) => {
  const { title, imgSrc, price, date } = productItem;
  return (
    <div className={styles.productCard_wrapper}>
      <div className={styles.imagePart}>
        <div className={styles.imageWrapper}>
          <ProductImage imgSrc={imgSrc} title={title} />
          <NewLabel date={date} />
        </div>
        <div className={styles.ViewBtnWrapper}>
          <ViewButton value="QUICK VIEW" />
        </div>
      </div>
      <ProductTitle title={title} />
      <ProductPrice price={price} />
    </div>
  );
};
export default ProductCard;
