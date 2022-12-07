import React from "react";
import ProductCard from "../../ProductCard";
import styles from "./style.module.css";
import { useShoppingCart } from "../../../Context/ShoppingCartContext";

const FeaturedProducts = () => {
  const { productsJson } = useShoppingCart();
  const featuredProducts = productsJson
    .sort((p1, p2) => p2.rating.rate - p1.rating.rate)
    .filter((product, index) => index < 8);

  return (
    <div className={styles.featuredProducts}>
      {[] &&
        featuredProducts.map((product) => {
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
