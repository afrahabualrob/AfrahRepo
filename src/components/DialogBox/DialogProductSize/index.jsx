import React, { useState } from "react";
import FilterOption from "../FilterOption";
import styles from "./style.module.css";
import { Grid } from "@mui/material";

const DialogProductSize = ({ sizes=[1,2,3,4] }) => {
  const [selectedSize, setSelectedSize] = useState(0);
  const handleSize = (event, size) => {
        event.preventDefault();

    if (size === selectedSize) {
      setSelectedSize(0);
    } else setSelectedSize(size);
  };
  return (
    <div className={styles.sizeWrapper}>
      <FilterOption title="size" />
      <Grid container justifyContent="space-between" alignItems="center">
        <grid xs={6}>
          <div>
            {sizes.map((size) => {
              const selectedSizeElement =
                selectedSize === size ? "selectedSize" : "sizeItem";
              return (
                <span
                  onClick={(event) => {
                    handleSize(event, size);
                  }}
                  // className={styles.sizeItem}
                  className={`${styles[selectedSizeElement]} `}
                >
                  {size}
                </span>
              );
            })}
          </div>
        </grid>
        <grid xs={6}>
          {" "}
          <a href="#" className={styles.sizeGuidelines}>
            Size Guidelines
          </a>
        </grid>
      </Grid>

      <span className={styles.modelInfo}>
        Model is a US Size 2-4, wears Matter Size 1. 175 cm tall.
      </span>
    </div>
  );
};

export default DialogProductSize;
