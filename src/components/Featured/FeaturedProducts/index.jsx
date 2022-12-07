import React from "react";
import ProductCard from "../../ProductCard";
import styles from "./style.module.css";
import { useShoppingCart } from "../../../Context/ShoppingCartContext";

const FeaturedProducts = () => {
  const { productsJson } = useShoppingCart();
  return (
    <div className={styles.featuredProducts}>
      {[] &&
        productsJson.map((product) => {
          const { id } = product;
          return (
            <div key={id} className={styles.featuredProduct_item}>
              <ProductCard productItem={product} />
            </div>
          );
        })}
    </div>
  );
};

export default FeaturedProducts;
