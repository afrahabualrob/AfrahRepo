import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const MenuItem = ({ menuItem, setIsMenuOpened }) => {
  return (
    <div className={styles.menuItem} onClick={()=>{setIsMenuOpened(false)}}>
      <Link to={menuItem} className={styles.menuLink}>
        {menuItem}
      </Link>
    </div>
  );
};

export default MenuItem;
