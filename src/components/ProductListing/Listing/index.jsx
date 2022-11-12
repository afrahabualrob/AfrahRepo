import React, { useState } from "react";
import AnAccordion from "../AnAccordion";
import Colors from "../Colors";
import styles from "./style.module.css";
import { Grid } from "@mui/material";

const Listing = ({
  filteredProducts,
  setFilteredProducts,
  allProducts,
  setExpandedItem,
}) => {
  const mainCategories = ["clothes", "others"];
  const allCategories = [
    { id: 0, categoryName: "women's clothing", categoryTitle: "clothes" },
    { id: 1, categoryName: "men's clothing", categoryTitle: "clothes" },
    { id: 2, categoryName: "jewelery", categoryTitle: "others" },
    { id: 3, categoryName: "electronics", categoryTitle: "others" },
  ];
  const [selectedCategory, setSelectedCategory] = useState("reset");
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div className={styles.list}>
      <Grid container justifyContent="space-between">
        <Grid item xs="auto">
          <span className={styles.filterWord}>filter</span>
        </Grid>
        <Grid
          item
          onClick={() => {
            setSelectedCategory("reset");
            setSelectedColor("");
          }}
        >
          <span
            className={
              selectedCategory === "reset"
                ? styles.resetFilterClicked
                : styles.resetFilterUnClicked
            }
          >
            reset
          </span>
        </Grid>
      </Grid>
      {mainCategories.map((mainCategory) => (
        <AnAccordion
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          allProducts={allProducts}
          key={mainCategory}
          item={mainCategory}
          items={allCategories.filter(
            (categoryItem) => categoryItem.categoryTitle === mainCategory
          )}
          setExpandedItem={setExpandedItem}
        />
      ))}
      <Colors
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        allProducts={allProducts}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        setSelectedCategory={setSelectedCategory}
      />
      {console.log("...................................")}
      {console.log(filteredProducts)}
    </div>
  );
};
export default Listing;
