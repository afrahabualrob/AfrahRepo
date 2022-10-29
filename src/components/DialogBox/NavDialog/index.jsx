import React from "react";
import styles from "./style.module.css";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const NavDialog = ({ title = "The Sideswept Dhoti", handleClose }) => {
  return (
    <div className={styles.dialogNav}>
      <span className={styles.navTitle}>{title}</span>
      <IconButton
        edge="start"
        color="inherit"
        onClick={handleClose}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
    </div>
  );
};

export default NavDialog;
