import React from "react";
import styles from "./style.module.css";
import { Grid } from "@mui/material";

const EmptyFavorite = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{py:4}}>
      <Grid item xs="auto">
        <h3 className={styles.emptyFavorite1}> MY WISHLIST </h3>
        <p className={styles.emptyFavorite2}>It is empty here.</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4296/4296700.png"
          className={styles.emptyFavoriteImage}
        />

        <p className={styles.emptyFavorite2}>
          Store everything you love on one page.
        </p>
      </Grid>
    </Grid>
  );
};

export default EmptyFavorite;
