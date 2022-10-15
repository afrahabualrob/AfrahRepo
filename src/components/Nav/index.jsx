import React from "react";
import styles from "./style.module.css";

const index = () => {
  return (
    <div className={styles.navContainer}>
      <p className={styles.navDescription}>
        Free shopping for order above USD 150
      </p>
    </div>
  );
};

export default index;
