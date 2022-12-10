import React from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Grid, IconButton, Button } from "@mui/material";
import styles from "./style.module.css";

const Loading = ({ indexLength, setIndexLength }) => {
  return (
    <Grid
      sx={{ marginTop: "40px" }}
      container
      justifyContent="center"
      alignItems="center"
      spacing={1}
      onClick={() => setIndexLength(indexLength + 12)}
    >
      <Grid item>
        <Button
          className={styles.loading}
          startIcon={
            <RefreshIcon
              className={styles.loadingIcon}
              sx={{
                fontSize: "30px !important",
                fontWeight: "100!important",
                opacity: 0.7,
                transform: "scaleX(-1)",
              }}
            />
          }
        >
          loading
        </Button>
      </Grid>
    </Grid>
  );
};

export default Loading;
