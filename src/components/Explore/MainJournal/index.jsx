import React from "react";
import MainJournalImage from "./MainJournalImage";
import PopularJournals from "./PopularJournals";
import { Grid } from "@mui/material";

const MainJournal = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      spacing={3}
      sx={{ pb: "50px" }}
    >
      <Grid item xs={12} md={6}>
        <MainJournalImage />
      </Grid>
      <Grid item xs={12} md={6}>
        <PopularJournals />
      </Grid>
    </Grid>
  );
};

export default MainJournal;
