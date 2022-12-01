import React from "react";
import styles from "./style.module.css";
import Cart from "../../Cart";
import HeartIcon from "./HeartIcon";

const NavbarIcons = () => {
  return (
    <div className={styles.navbar_icons}>
      <div className={styles.navbar_icon}>
        <HeartIcon />
      </div>

      <div className={styles.navbar_icon}>
        <Cart />
      </div>
    </div>
  );
};

export default NavbarIcons;
