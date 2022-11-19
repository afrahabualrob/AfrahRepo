import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import { Grid } from "@mui/material";

const Colors = ({
  selectedColor,
  setSelectedColor,
  setSelectedCategory,
  selectedCategory,
  priceFiltration,
  setExpandedItem,
  productsSpecificColor,
}) => {
  const colorsJson = [
    { id: 1, name: "gray", code: "#6e9e9e" },
    { id: 2, name: "Gainsboro", code: "#ccc" },
    { id: 3, name: "RebeccaPurple", code: "#800080" },
    { id: 4, name: "IndianRed", code: "#CD5C5C" },
    { id: 5, name: "Silver", code: "#d0e1e1" },
    { id: 6, name: "PaleGoldenRod", code: "#EEE8AA" },
    { id: 7, name: "Beige", code: "#F5F5DC" },
    { id: 8, name: "DarkSlateGrey", code: "#2F4F4F" },
    { id: 9, name: "white", code: "#fff" },
    { id: 10, name: "MidnightBlue", code: "#191970" },
  ];
  const changeColor = (e, color) => {
    setSelectedColor(color);
    // priceFiltration(productsSpecificColor);
    setExpandedItem("Matter shops");
  };
  useEffect(() => {
    priceFiltration(productsSpecificColor);
  }, [selectedColor]);

  return (
    <>
      <h3 className={styles.colorsTitle}>Colors</h3>
      <Grid container spacing={2}>
        {colorsJson.map((color) => (
          <Grid item key={color.id}>
            <span
              style={{ backgroundColor: color.code }}
              className={styles.color}
              onClick={(e) => changeColor(e, color.name)}
            ></span>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Colors;
