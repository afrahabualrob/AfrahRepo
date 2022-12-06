import React, { useState } from "react";
import { Grid } from "@mui/material";
import DialogProductQuantity from "../DialogProductQuantity";
import styles from "./style.module.css";
import FilterOption from "../FilterOption";
import { useShoppingCart } from "../../../Context/ShoppingCartContext";
import { useFavoriteContext } from "../../../Context/Favorites.jsx";

const QuantitySection = ({ id, availableQuantity }) => {
  let { increaseCartQuantity, removeFromCart } = useShoppingCart();
  let { addToFavorites, favoriteProducts } = useFavoriteContext();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  return (
    <div className={styles.quantityPart}>
      <FilterOption title="Quantity" />

      <Grid container spacing={{ xs: 1 }} alignItems="center">
        <Grid item xs={6} sm={4}>
          <DialogProductQuantity
            availableQuantity={availableQuantity}
            selectedQuantity={selectedQuantity}
            setSelectedQuantity={setSelectedQuantity}
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          {!isAdded ? (
            <button
              className={styles.addToCartBtn}
              onClick={() => {
                increaseCartQuantity(id, selectedQuantity);
                setIsAdded(true);
              }}
            >
              Add To Cart
            </button>
          ) : (
            <button
              className={styles.addToCartBtn}
              onClick={() => {
                removeFromCart(id);
                setIsAdded(false);
              }}
            >
              Remove From Cart
            </button>
          )}
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container spacing={1} alignItems="center" justifyContent="left">
            <Grid item xs={2} sm={2}>
              {/* <img src="/assets/icons/questionMark.svg" alt="Question Mark " /> */}
            </Grid>
            <Grid item xs={10} sm={10}>
              <button
                className={styles.AddToWishlistBtn}
                onClick={() => addToFavorites(id)}
              >
                {favoriteProducts.find((item) => item.id === id)
                  ? "Remove "
                  : "Add "}
                to wishlist
              </button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default QuantitySection;
