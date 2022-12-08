import React from "react";
import styles from "./style.module.css";
import Cart from "../../Cart";
import HeartIcon from "./HeartIcon";
import { Grid } from "@mui/material";

const NavbarIcons = () => {
  return (
    <Grid container spacing={1}>
      <Grid item>
        <HeartIcon />
      </Grid>

      <Grid item>
        <Cart />
      </Grid>
    </Grid>
  );
};

export default NavbarIcons;
