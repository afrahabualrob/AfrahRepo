import React, { useEffect, useState, useMemo } from "react";
import styles from "./style.module.css";

import { Container, Box, Grid, FormControl, Select } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ProductListingNav = ({
  filteredProducts,
  setFilteredProducts,
  allProducts,
  expandedItem,
}) => {
  const filteredCategories = [
    { id: 11, title: "All" },
    { id: 22, title: "High to Low" },
    { id: 33, title: "Low to High" },
  ];

  const [selectedSizeFilter, setSelectedSizeFilter] = useState(
    filteredCategories[0].id
  );

  const handleSelectedSizeChange = (event) => {
    setSelectedSizeFilter(event.target.value);
  };

  // delete useEffect and write it as Arrow Function...
  useEffect(() => {
    sizeFiltration();
  }, [selectedSizeFilter]);

  const sizeFiltration = () => {
    switch (selectedSizeFilter) {
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
    <Box className={styles.box}>
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs="auto">
            <span className="womenWord">{expandedItem}</span>
          </Grid>
          <Grid container item xs="auto" alignItems="center" spacing={1}>
            <Grid item>
              <span className={styles.sortedBy}>Sorted by Price </span>
            </Grid>
            <Grid item>
              <FormControl
                sx={{ minWidth: 100 }}
                className={styles.formControl}
              >
                <Select
                  native
                  IconComponent={ExpandMoreIcon}
                  className={styles.select}
                  onChange={handleSelectedSizeChange}
                  displayEmpty
                  inputProps={{ "aria-label": "filtered" }}
                >
                  {filteredCategories.map((category) => (
                    <option
                      key={category.id}
                      value={category.id}
                      className={styles.ii}
                    >
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
