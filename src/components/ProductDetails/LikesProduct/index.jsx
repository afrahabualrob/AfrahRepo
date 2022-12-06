import React from "react";
import { useShoppingCart } from "../../../Context/ShoppingCartContext";
import ProductCard from "../../ProductCard";
import { Grid, Container } from "@mui/material";
import Heading2 from "../../Heading2";

const LikesProduct = () => {
  const { productsJson } = useShoppingCart();

  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }

  return (
    <Container sx={{ padding: "30px 0" }}>
      <Heading2 heading="You May Also Like" />
      <Grid container justifyContent="space=-between" spacing={4}>
        {getMultipleRandom(productsJson, 4).map((product) => (
          <Grid item xs={12} sm={6} md={3}>
            <ProductCard productItem={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LikesProduct;
