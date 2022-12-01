import React from "react";
import { Grid } from "@mui/material";
import DialogProductQuantity from "../DialogProductQuantity";
import styles from "./style.module.css";
import FilterOption from "../FilterOption";
import { useShoppingCart } from "../../../Context/ShoppingCartContext";
import { useFavoriteContext } from "../../../Context/Favorites.jsx";


const QuantitySection = ({ id, availableQuantity }) => {
  let { increaseCartQuantity } = useShoppingCart();
  let { addToFavorites,favoriteProducts } = useFavoriteContext();

  return (
    <div className={styles.quantityPart}>
      <FilterOption title="Quantity" />

      <Grid container spacing={{ xs: 1 }} alignItems="center">
        <Grid item xs={6} sm={4}>
          <DialogProductQuantity availableQuantity={availableQuantity} />
        </Grid>
        <Grid item xs={6} sm={4}>
          <button
            className={styles.addToCartBtn}
            onClick={() => increaseCartQuantity(id)}
          >
            Add to cart
          </button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container spacing={1} alignItems="center" justifyContent="left">
            <Grid item xs={2} sm={2}>
              <img src="/assets/icons/questionMark.svg" alt="Question Mark " />
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
