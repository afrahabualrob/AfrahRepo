import React from "react";
import styles from "./style.module.css";

const BurgerMenu = ({ isMenuOpened, setIsMenuOpened }) => {
  const burgerItemOpened = isMenuOpened ? "burgerItemClicked" : "burgerItem";
  return (
    <div>
      <button onClick={() => setIsMenuOpened(!isMenuOpened)} className={styles.burger}>
        <div className={`${styles[burgerItemOpened]}`}> </div>
        <div className={`${styles[burgerItemOpened]}`}> </div>
        <div className={`${styles[burgerItemOpened]}`}> </div>
      </button>
    </div>
  );
};

export default BurgerMenu;
