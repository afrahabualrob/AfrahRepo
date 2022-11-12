import React, { useState } from "react";
import ProductCard from "../../ProductCard";
import { Grid } from "@mui/material";

const Products = ({ products }) => {
  // const [shownProducts, setShowenProducts] = useState(products);
  let products1 =
    products.length >= 12
      ? products.filter((item, index) => index < 12)
      : products;
  return (
    <>
      <Grid container spacing={8} alignItems="center">
        {products1.map((product) => (
          <Grid item xs={6} md={4} key={product.id}>
            <ProductCard productItem={product} />
          </Grid>
        ))}
      </Grid>
      {products.length > 12 && (
        <span
          onClick={() => {
            products1 = products;
          }}
        >
          {" "}
          Show More
        </span>
      )}
      {/* {console.log(shownProducts)} */}
    </>
  );
};

export default Products;
