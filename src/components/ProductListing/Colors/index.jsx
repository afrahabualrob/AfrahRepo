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
    { id: 1, name: "teal", code: "#9ED5C5" },
    { id: 2, name: "Gainsboro", code: "#DEBACE" },
    { id: 3, name: "RebeccaBrown", code: "#a76213" },
    { id: 4, name: "black", code: "#352322" },
    { id: 5, name: "Silver", code: "#d0e1e1" },
    { id: 6, name: "blue", code: "#7cbffd" },
    { id: 7, name: "gold", code: "#f8efbf" },
    { id: 8, name: "DarkSlateGrey", code: "#7c7578" },
    { id: 9, name: "white", code: "#fff" },
    { id: 10, name: "pink", code: "#F7A4A4" },
    { id: 10, name: "darkGreen", code: "#024c3f" },
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
