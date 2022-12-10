import React from "react";
import styles from "./style.module.css";
import { Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const DialogProductQuantity = ({ availableQuantity,selectedQuantity, setSelectedQuantity }) => {

  const decreaseQuantity = () => {
    setSelectedQuantity(selectedQuantity - 1);
  };
  const increaseQuantity = () => {
    setSelectedQuantity(selectedQuantity + 1);
  };

  return (
    <div className={styles.quantityWrapper}>
      <div className={styles.quantity}>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={4}>
            <button
              className={styles.quantityBtn}
              disabled={selectedQuantity <= 1}
              onClick={decreaseQuantity}
            >
              <RemoveIcon />
            </button>
          </Grid>
          <Grid item xs={4}>
            <label className={styles.quantityNumber}>{selectedQuantity}</label>
          </Grid>
          <Grid item xs={4}>
            <button
              className={styles.quantityBtn}
              onClick={increaseQuantity}
              disabled={selectedQuantity >= availableQuantity}
            >
              <AddIcon />
            </button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DialogProductQuantity;
