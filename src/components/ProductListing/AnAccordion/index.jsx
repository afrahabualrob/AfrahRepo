import React, { useEffect, useState, useMemo } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
  allProducts,
  selectedCategory,
  setSelectedCategory,
  setExpandedItem,
  priceFiltration,
  selectedColor,
  setSelectedColor,
}) => {
  const [expanded, setExpanded] = useState(true);

  const handleCategory = (e, categoryName) => {
    setSelectedCategory(categoryName);
    setSelectedColor("");
    setExpandedItem(categoryName);
  };

  useEffect(() => {
    if (selectedCategory === "reset") {
      priceFiltration(allProducts);
      setExpandedItem("Matter shops");
    } else
      priceFiltration(
        allProducts.filter((product) => product.category === selectedCategory)
      );
  }, [selectedCategory]);

  return (
    <>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          className={styles.categoryTitle}
          expandIcon=<ExpandMoreIcon />
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
                    selectedCategory === categoryName && selectedColor === ""
                      ? styles.selectedSubCategory
                      : styles.subCategory
                  }
                  onClick={(e) => handleCategory(e, categoryName)}
                >
                  {categoryName}
                </ListItemText>
              </ListItem>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AnAccordion;
