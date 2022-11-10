import React from "react";
import DialogImage from "../DialogImage";
import DialogProductDetails from "../DialogProductDetails";
import DialogProductSize from "../DialogProductSize";
import QuantitySection from "../QuantitySection";
import styles from "./style.module.css";
import Rating from "../Rating";
import DialogDescription from "../DialogDescription/index";
import { Grid, Container } from "@mui/material";

const DialogCard = ({ productItem }) => {
  const {
    id,
    title,
    price,
    description,
    rating,
    images,
    sizes,
    details,
    availableQuantity,
  } = productItem;

  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={1}
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="center"
      >
        <Grid item md={6}>
          <DialogImage images={images} />
        </Grid>
        <Grid item md={6}>
          <h2 className={styles.title}>{title} </h2>

          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            flexDirection="left"
          >
            <Grid item xs={12} md={6}>
              <p className={styles.price}>SGD {price}</p>
            </Grid>
            <Grid item xs={12} md={6}>
              <Rating rating={rating.rate} />
            </Grid>
          </Grid>
          <DialogDescription description={description} />
          <DialogProductDetails details={details} />
          <DialogProductSize sizes={sizes} />
          <div>
            <QuantitySection availableQuantity={availableQuantity} />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DialogCard;
