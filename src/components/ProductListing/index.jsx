import React, { useState, useEffect } from "react";
import ProductListingNav from "./ProductListingNav";
import BackGround from "./BackGround";
import Listing from "./Listing";
import Products from "./Products";
import { Grid, Container } from "@mui/material";
import { useShoppingCart } from "../../Context/ShoppingCartContext";

const ProductListing = () => {
  const filteredCategories = [
    { id: 11, title: "All" },
    { id: 22, title: "High to Low" },
    { id: 33, title: "Low to High" },
  ];
  const { productsJson } = useShoppingCart();

  const [filteredProducts, setFilteredProducts] = useState([productsJson]);
  const [expandedItem, setExpandedItem] = useState("Matter shops");
  const [selectedPriceFilter, setSelectedPriceFilter] = useState(
    filteredCategories[0].id
  );

  const priceFiltration = (filteredProducts) => {
    switch (selectedPriceFilter) {
      case "11":
        setFilteredProducts([...filteredProducts.sort((a, b) => a.id - b.id)]);
        break;

      case "22":
        setFilteredProducts([
          ...filteredProducts.sort((a, b) => b.price - a.price),
        ]);

        break;

      case "33":
        setFilteredProducts([
          ...filteredProducts.sort((a, b) => a.price - b.price),
        ]);
        break;

      default:
        setFilteredProducts([...filteredProducts]);
    }
  };
  return (
    <div>
      <BackGround expandedItem={expandedItem} />
      <ProductListingNav
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        allProducts={productsJson}
        expandedItem={expandedItem}
        selectedPriceFilter={selectedPriceFilter}
        setSelectedPriceFilter={setSelectedPriceFilter}
        priceFiltration={priceFiltration}
        filteredCategories={filteredCategories}
      />

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Listing
              filteredProducts={filteredProducts}
              setFilteredProducts={setFilteredProducts}
              allProducts={productsJson}
              setExpandedItem={setExpandedItem}
              priceFiltration={priceFiltration}
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <Products products={filteredProducts} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductListing;
