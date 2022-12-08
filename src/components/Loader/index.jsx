import React from "react";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      sx={{ height: "100vh" }}
    >
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export default Loader;
