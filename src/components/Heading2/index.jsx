import React from "react";
import styles from "./style.module.css";
import { Typography } from "@mui/material";

const index = ({ heading }) => {
  return (
    <Typography
      variant="h4"
      component="h2"
      gutterBottom
      className={styles.heading_2}
    >
      {heading}
    </Typography>
  );
};

export default index;
