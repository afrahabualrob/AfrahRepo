import React from "react";
import IconButton from "@mui/material/IconButton";
import { FaAngleLeft } from "react-icons/fa";
import styles from "./style.module.css";

const PrevButton = () => {
  return (
    <IconButton
      sx={{
        position: "absolute",
        left: 0,
        zIndex: 10,
        borderRadius: "0 90px 90px 0",
        backgroundColor: "rgba(51, 51, 58, 0.6)",
        color: "RGB(255, 255, 255) !important",
        height: "70px",
        width: "50px",
        marginLeft: -2,
        top: "50%",

        "&:hover": {
          backgroundColor: "#888 !important",
          color: "#000 !important",
        },
      }}
    >
      <div className={styles.icon}>
        <FaAngleLeft />
      </div>
    </IconButton>
  );
};
export default PrevButton;
