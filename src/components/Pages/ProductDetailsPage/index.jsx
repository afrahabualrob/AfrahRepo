import React from "react";
import LikesProduct from "../../ProductDetails/LikesProduct";
import InstaProduct from "../../ProductDetails/InstaProduct";
import CustomerReviews from "../../ProductDetails/CustomerReviews";
import Quotation from "../../ProductDetails/Quotation";
import Others from "../../ProductDetails/Others";
import ProductDetails from "../../ProductDetails";

const ProductDetailsPage = () => {

  return (
    <>
      <ProductDetails />
      <Others />
      <Quotation />
      <InstaProduct />
      <CustomerReviews />
      <LikesProduct />
    </>
  );
};

export default ProductDetailsPage;
