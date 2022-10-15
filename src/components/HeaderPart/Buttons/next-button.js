import React from "react";
import IconButton from "@mui/material/IconButton";
import { FaAngleRight} from "react-icons/fa";
import styles from "./style.module.css";

const NextButton = () => {
  return (
    <IconButton
      sx={{
        position: "absolute",
        right: 0,
        borderRadius: "90px 0 0 90px ",
        backgroundColor: "rgba(51, 51, 58, 0.6);",
        color: "RGB(255, 255, 255) !important",
        height: "70px",
        width: "50px",
        marginRight: -2,
        top: "40%",
        opacity: "none",

        "&:hover": {
          backgroundColor: "#888 !important",
          color: "#000 !important",
        },
      }}
    >
      <div className={styles.icon}>
        <FaAngleRight />
      </div>
    </IconButton>
  );
};
export default NextButton;
