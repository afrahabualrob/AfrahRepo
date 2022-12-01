import React from "react";
import { Container, Grid } from "@mui/material";
import styles from "./style.module.css";

const PopularJournal = ({ journalData }) => {
  const { id, title, description, date } = journalData;
  return (
    <>
      <p className={styles.title}>
        <span className={styles.number}> {id}</span>
        <span>{title}</span>
      </p>
      <p className={styles.description}>{description}</p>
      <span className={styles.SubHeading}>FIELDTESTED {date}</span>
    </>
  );
};

export default PopularJournal;
