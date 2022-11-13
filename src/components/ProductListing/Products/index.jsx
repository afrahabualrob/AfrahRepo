import React, { useState } from "react";
import ProductCard from "../../ProductCard";
import { Grid } from "@mui/material";

const Products = ({ products }) => {
  // const [shownProducts, setShownProducts] = useState(products);
  return (
    <>
      <Grid container spacing={8} alignItems="center">
        {products.map((product) => (
          <Grid item xs={6} md={4} key={product.id}>
            <ProductCard productItem={product} />
          </Grid>
        ))}
      </Grid>
      {products.length > 12 && <span> Show More</span>}
    </>
  );
};

export default Products;
