import React from "react";
import MenuItem from "../MenuItem";
import styles from "./style.module.css";

const MenuItems = ({ listDirection, MenuStatus }) => {
  const menuItems = ["shop", "fabric", "journal", "about"];
  return (
    <ul className={`${styles.menuList} ${styles[listDirection]}`}>
      {[] &&
        menuItems.map((item, index) => {
          return (
            <li key={index} className={styles.menuItem}>
              <MenuItem menuItem={item} />
            </li>
          );
        })}
    </ul>
  );
};

export default MenuItems;
