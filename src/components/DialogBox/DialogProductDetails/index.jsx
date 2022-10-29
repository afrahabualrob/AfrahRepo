import React from "react";
import styles from "./style.module.css";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const dialogDetailStyles = makeStyles((theme) => ({
  dialogDetail: {
    boxShadow: "0px -2px 0px rgba(249, 248, 246, 1)",
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingTop: "8px",
    marginBottom: "24px",
  },
}));
const DialogProductDetails = ({ details }) => {
  const classes = dialogDetailStyles();
  return (
    <>
      {[] &&
        details.map((detailsItem) => {
          const { subTitle, info } = detailsItem;
          return (
            <Grid container spacing={1} className={classes.dialogDetail}>
              <Grid item xs={7}>
                <h5 className={styles.dialogSubTitle}>{subTitle}</h5>
              </Grid>
              <Grid item xs={5}>
                <p className={styles.information}>{info}</p>
              </Grid>
            </Grid>
          );
        })}
    </>
  );
};
export default DialogProductDetails;
