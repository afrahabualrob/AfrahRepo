import React from "react";
import styles from "./style.module.css";

const FooterTitle = ({ title }) => {
  return <h5 className={styles.footerTitle}>{title}</h5>;
};

export default FooterTitle;
