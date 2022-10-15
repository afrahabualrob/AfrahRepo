import React from "react";
import styles from "./style.module.css";

const FooterContent = ({ content }) => {
  const filteredFooterItem = (content) => {
    return (
      [] &&
      content.map((item) => {
        const { id, text, link } = item;
        return link !== "" ? (
          <a key={id} className={styles.footerItem} href={link}>
            {text}
          </a>
        ) : (
          <span key={id} className={styles.footerItem}>
            {text}
          </span>
        );
      })
    );
  };

  return <>{filteredFooterItem(content)}</>;
};

export default FooterContent;
