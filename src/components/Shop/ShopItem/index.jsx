import React from "react";
import styles from "./style.module.css";
import ShopItemImage from "../ShopItem/ShopItemImage";
import ShopItemLabel from "../ShopItem/ShopItemLabel";
import ShopItemButton from "../ShopItem/ShopItemButton";
// import ViewButton from "../../Featured/ViewButton"

const ShopItem = ({ shop_Item }) => {
  const { category, category_img, url } = shop_Item;

  return (
    <div className={styles.shopItem}>
      <div className={styles.imageItem}>
        <ShopItemImage category_img={category_img} category={category} />
        <div className={styles.shopItem_overlay}></div>
      </div>
      <ShopItemLabel category={category} />
      <div className={styles.itemBtn}>
        <ShopItemButton url={url} />
      </div>
    </div>
  );
};

export default ShopItem;
