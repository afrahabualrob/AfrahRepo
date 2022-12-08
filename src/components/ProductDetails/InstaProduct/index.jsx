import React from "react";
import { useShoppingCart } from "../../../Context/ShoppingCartContext";
import { Grid, Container } from "@mui/material";
import Heading2 from "../../Heading2";
import useMultipleRandom from "../../../hook/useMultipleRandom";

const InstaProduct = () => {
  const { productsJson } = useShoppingCart();

  return (
    <Container sx={{ padding: "30px 0" }}>
      <Heading2 heading="As Seen On Instagram" />
      <Grid container justifyContent="space=-between" spacing={6}>
        {useMultipleRandom(productsJson, 4).map((product) => (
          <Grid item xs={12} sm={6} md={3}>
            <img src={product.image} width="100%" />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default InstaProduct;
