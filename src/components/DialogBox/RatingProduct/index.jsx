import React from "react";
import styles from "./style.module.css";
import { Grid, Rating } from "@mui/material";

const RatingProduct = ({ rating }) => {
  return (
    <Grid container alignItems="center" spacing={1}>
      <Rating
        name="size-medium"
        value={rating}
        precision={0.1}
        readOnly
        sx={{ color: "#FF6008" }}
      />

      <Grid item>
        <span className={styles.ratingValue}>{rating} of 5</span>
      </Grid>
    </Grid>
  );
};

export default RatingProduct;
