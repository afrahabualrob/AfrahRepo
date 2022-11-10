import React from "react";
import styles from "./style.module.css";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const MenuItem = ({ menuItem }) => {
  return (
    <div className={styles.menuItem}>
      <Link to={menuItem} className={styles.menuLink}>
        {menuItem}
      </Link>
      <FaAngleDown className={styles.angleIcon} />
    </div>
  );
};

export default MenuItem;
