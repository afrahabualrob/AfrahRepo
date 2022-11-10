import React, { useEffect, useState, useMemo } from "react";
import styles from "./style.module.css";

import { Container, Box, Grid, FormControl, Select } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Nav1 = ({ filteredProducts, setFilteredProducts, allProducts }) => {
  const filteredCategories = [
    { id: 11, title: "All" },
    { id: 22, title: "High to Low" },
    { id: 33, title: "Low to High" },
  ];
  const [filter1, setFilter] = useState(filteredCategories[0].id);

  const handleChange = (event) => {
    setFilter(event.target.value);
    console.log(filter1);
  };
  const filterAnPrice = () => {
    console.log("HI");
    switch (filter1) {
      case "11": {
        setFilteredProducts(allProducts);
        break;
      }

      case "22": {
        setFilteredProducts(allProducts.sort((a, b) => b.price - a.price));
        break;
      }

      case "33": {
        setFilteredProducts(allProducts.sort((a, b) => a.price - b.price));
        console.log(filteredProducts);

        break;
      }
      default:
      setFilteredProducts(allProducts);
    }
  };

  useEffect(() => filterAnPrice(), [filter1]);
  return (
    <Box className={styles.box}>
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs="auto">
            <span className="womenWord">women</span>
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
                  // defaultValue={0}
                  IconComponent={ExpandMoreIcon}
                  className={styles.select}
                  // value={filter1}
                  onChange={handleChange}
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

export default Nav1;
