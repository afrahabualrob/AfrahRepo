import React from "react";
import styles from "./style.module.css";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <h1 className={styles.error404}>404</h1>
        <h3 className={styles.quotation1}>Look like you're lost</h3>
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="Error 404"
          height="300px"
        />
        <p className={styles.quotation2}>
          the page you are looking for not avaibel!
        </p>
        <Grid container justifyContent="center">
          <Grid item>
            {/* <Link to="/" className={styles.link_404}>
              Go to Home
            </Link> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NoMatch;
