import React from "react";
import DialogCard from "../DialogBox/DialogCard";
import FeaturesFabric from "./FeaturesFabric";
import { Grid, Container } from "@mui/material";

const ProductDetails = () => {
  const productItem = {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    quantity: 5,
    image:
      "https://images.unsplash.com/photo-1598017194618-e4358adf41e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    rating: {
      rate: 4.1,
      count: 259,
    },
    images: [
      "https://dummyjson.com/image/i/products/20/1.jpg",
      "https://dummyjson.com/image/i/products/20/2.jpg",
      "https://dummyjson.com/image/i/products/20/3.jpg",
      "https://dummyjson.com/image/i/products/20/4.jpg",
      "https://dummyjson.com/image/i/products/20/thumbnail.jpg",
    ],
    sizes: [1, 2, 3, 4],
    details: [
      {
        subTitle: "artisan employment",
        info: "88 jobs",
      },
      {
        subTitle: "partnership",
        info: "Randall Armstrong",
      },
      {
        subTitle: "In collab:",
        info: "Augusta Mendoza",
      },
    ],
    color: "Gainsboro",
    date: "10-10-2022",
  };
  return (
    <Container sx={{ pt: 4 }}>
      <DialogCard productItem={productItem} />
      <Grid container justifyContent="flex-end">
        <Grid item xs={12} md={6} sx={{pt:4}}>
          <FeaturesFabric />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
