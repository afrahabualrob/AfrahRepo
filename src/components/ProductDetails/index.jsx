import React from "react";
import DialogCard from "../DialogBox/DialogCard";
import FeaturesFabric from "./FeaturesFabric";
import { Grid, Container } from "@mui/material";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productsJson } = useShoppingCart();

  const { productId } = useParams();

  let obj = productsJson.find((item) => item.id === Number(productId));
  return (
    <Container sx={{ pt: 4 }}>
      {obj && <DialogCard productItem={obj} />}{" "}
      <Grid container justifyContent="flex-end">
        <Grid item xs={12} md={6}>
          <FeaturesFabric />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
