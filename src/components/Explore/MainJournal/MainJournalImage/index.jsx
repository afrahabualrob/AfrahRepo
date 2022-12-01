import React from "react";
import { Card, CardMedia, CardContent } from "@mui/material";
import styles from "./style.module.css";
import { style } from "@mui/system";

const MainJournalImage = () => {
  return (
    <Card sx={{ position: "relative" }}>
      <CardMedia
        sx={{
          paddingTop: "0%",
          objectFit: "contain",
          width: "100%",
        }}
        component="img"
        image="./assets/images/journal1.png"
        title="JournalImage"
        alt="JournalImage"
      />
      <p
        style={{
          position: "absolute",
          top: 10,
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
        }}
      >
        <h5 className={styles.journalTitle}>Lasik Eye Surgery Are You Ready</h5>
        <p className={styles.description}>
          As a voice for conscious fashion, Raye Padit is motivated by the
          belief that one person’s actions, no matter how small, holds great
          impact. This core ideal has driven him to start his three passion
          projects: Connected Threads Asia, PeyaR, and Swagalls.
        </p>
      </p>
    </Card>
  );
};

export default MainJournalImage;
