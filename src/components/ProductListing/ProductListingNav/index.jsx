import React, { useEffect, useState, useMemo } from "react";
import styles from "./style.module.css";

import { Container, Box, Grid, FormControl, Select } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ProductListingNav = ({
  filteredProducts,
  setFilteredProducts,
  allProducts,
  expandedItem,
  selectedPriceFilter,
  setSelectedPriceFilter,
  priceFiltration,
  filteredCategories,
}) => {
  const handleSelectedSizeChange = (event) => {
    setSelectedPriceFilter(event.target.value);
  };

  // delete useEffect and write it as Arrow Function...
  useEffect(() => {
    priceFiltration(filteredProducts);
  }, [selectedPriceFilter]);

  return (
    <Box className={styles.NavBox}>
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs="auto">
            <span className={styles.selectedCategory}>{expandedItem}</span>
          </Grid>
          <Grid container item xs="auto" alignItems="center" spacing={1}>
            <Grid item>
              <span className={styles.sortedBy}>Sorted by Price </span>
            </Grid>
            <Grid item>
              <FormControl sx={{ minWidth: 100 }}>
                <Select
                  native
                  IconComponent={ExpandMoreIcon}
                  className={styles.selectLabel}
                  onChange={handleSelectedSizeChange}
                  displayEmpty
                  inputProps={{ "aria-label": "filtered" }}
                >
                  {filteredCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductListingNav;
