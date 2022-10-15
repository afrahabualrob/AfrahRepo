import React from "react";
import styles from "./style.module.css";

const ViewButton = ({ value }) => {
  return <button className={styles.viewButton}>{value}</button>;
};

export default ViewButton;
