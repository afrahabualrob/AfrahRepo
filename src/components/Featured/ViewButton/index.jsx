import React from "react";
import styles from "./style.module.css";

const ViewButton = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className={styles.viewButton}>
      {value}
    </button>
  );
};

export default ViewButton;
