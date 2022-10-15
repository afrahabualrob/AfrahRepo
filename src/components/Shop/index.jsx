import React from "react";
import styles from "./style.module.css";
import Heading2 from "../Heading2";
import ShopItem from "../Shop/ShopItem";

const Shop = () => {
  const shopItems = [
    {
      id: 1,
      category: "pants",
      category_img: "./assets/images/categoryShop_1.png",
      url: "#",
    },
    {
      id: 2,
      category: "Tops",
      category_img: "./assets/images/categoryShop_2.png",
      url: "#",
    },
    {
      id: 3,
      category: "Jumpsuits",
      category_img: "./assets/images/categoryShop_3.png",
      url: "#",
    },

    {
      id: 4,
      category: "Accessories",
      category_img: "./assets/images/categoryShop_4.png",
      url: "#",
    },
  ];
  return (
    <div className={styles.shopSection}>
      <div className={styles.container}>
        <Heading2 heading="Shop" />
        <div className={styles.shopItems}>
          {[] &&
            shopItems.map((item) => {
              const { id } = item;
              return (
                <div key={id} className={styles.shopItem}>
                  <ShopItem shop_Item={item} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
