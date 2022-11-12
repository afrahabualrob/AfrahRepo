import React, { useEffect, useState, useMemo } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ListItem,
  ListItemText,
} from "@mui/material";
import styles from "./style.module.css";

const AnAccordion = ({
  item,
  items,
  filteredProducts,
  setFilteredProducts,
  allProducts,
  selectedCategory,
  setSelectedCategory,
  setExpandedItem,
}) => {
  const [expanded, setExpanded] = useState(true);

  const fun = () => {
    if (selectedCategory === "reset" || selectedCategory === "")
      setFilteredProducts(allProducts);
    else {
      setFilteredProducts(
        allProducts.filter((product) => product.category === selectedCategory)
      );
    }
  };

  useMemo(() => fun(), [selectedCategory]);
  const handleCategory = (e, categoryName) => {
    setSelectedCategory(categoryName);
    if (selectedCategory === "reset" || selectedCategory === "")
      setFilteredProducts(allProducts);
    else {
      setFilteredProducts(
        allProducts.filter((product) => product.category === selectedCategory)
      );
      setExpandedItem(categoryName);
    }
  };
  return (
    <>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          className={styles.categoryTitle}
          expandIcon=<KeyboardArrowUpIcon />
          onClick={(event) => {
            setExpanded(!expanded);
            if (expanded) setExpandedItem(item);
          }}
        >
          {item}
        </AccordionSummary>
        <AccordionDetails>
          {items.map((category) => {
            const { id, categoryName } = category;
            return (
              <ListItem key={id}>
                <ListItemText
                  disableTypography
                  className={
                    selectedCategory === categoryName
                      ? styles.selectedSubCategory
                      : styles.subCategory
                  }
                  onClick={(e) => handleCategory(e, categoryName)}
                >
                  {categoryName}
                </ListItemText>
                {console.log(selectedCategory)}
              </ListItem>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AnAccordion;
