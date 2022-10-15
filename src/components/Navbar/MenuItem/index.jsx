import React from "react";
import styles from "./style.module.css";
import { FaAngleDown } from "react-icons/fa";

const MenuItem = ({ menuItem }) => {
  return (
    <div className={styles.menuItem}>
      <a href="#" className={styles.menuLink}>{menuItem}</a>
      <FaAngleDown className={styles.angleIcon} />
    </div>
  );
};

export default MenuItem;
