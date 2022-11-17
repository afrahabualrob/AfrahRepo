import React, { useState, useEffect } from "react";
import ProductCard from "../../ProductCard";
import { Grid } from "@mui/material";
import Loading from "../Loading";

const Products = ({ products }) => {
  const [indexLength, setIndexLength] = useState(12);

  let shownProducts = products.filter((item, index) => index < indexLength);
  console.log(shownProducts);

  return (
    <div style={{ marginBottom: "40px" }}>
      <Grid container spacing={8} alignItems="center">
        {shownProducts.map((product) => (
          <Grid item xs={6} md={4} key={product.id}>
            <ProductCard productItem={product} />
          </Grid>
        ))}
      </Grid>
      {shownProducts.length < products.length && (
        <Loading indexLength={indexLength} setIndexLength={setIndexLength} />
      )}
    </div>
  );
};

export default Products;
