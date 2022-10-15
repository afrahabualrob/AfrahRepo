import React from "react";
import styles from "./style.module.css";

const ContactIcon = ({ iconPath, desc, iconLink ,iconColor}) => {
  return (
    <a className={`${styles.contactIcon}`} href={iconLink} >
      <img src={iconPath} alt={desc} />
    </a>
  );
};

export default ContactIcon;
