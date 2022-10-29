import React from "react";
import styles from "./style.module.css";
import EmptyStar from "../StarIcon/emptyStar";
import FilledStar from "../StarIcon/filledStar";
import { Grid } from "@mui/material";

const Rating = ({ rating }) => {
  const numberOfFilledStars = Math.round(rating);
  const FilledStars = new Array(numberOfFilledStars);
  const emptyStars = new Array(5 - numberOfFilledStars);

  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item>
        {[...FilledStars].map((item, index) => {
          return <FilledStar />;
        })}
        {[...emptyStars].map((item, index) => {
          return <EmptyStar />;
        })}
      </Grid>
      <Grid item>
        <span className={styles.ratingValue}>{rating} of 5</span>
      </Grid>
    </Grid>
  );
};

export default Rating;
