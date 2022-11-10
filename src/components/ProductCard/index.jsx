import React, { useState } from "react";
import styles from "./style.module.css";
import ProductTitle from "../ProductCard/ProductTitle";
import ProductPrice from "../ProductCard/ProductPrice";
import ProductImage from "../ProductCard/ProductImage";
import ViewButton from "../Featured/ViewButton";
import NewLabel from "../ProductCard/NewLabel";
import DialogBox from "../DialogBox";

const ProductCard = ({ productItem }) => {
  const { title, image, price, date = "1/11/2022" } = productItem;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.productCard_wrapper} key={title}>
      <div className={styles.imagePart}>
        <div className={styles.imageWrapper}>
          <ProductImage imgSrc={image} title={title} />
          <NewLabel date={date} />
        </div>
        <div className={styles.ViewBtnWrapper}>
          <ViewButton value="QUICK VIEW" onClick={handleClickOpen} />
        </div>
      </div>
      <ProductTitle title={title} />
      <ProductPrice price={price} />

      <DialogBox
        handleClose={handleClose}
        open={open}
        productItem={productItem}
      />
    </div>
  );
};
export default ProductCard;
