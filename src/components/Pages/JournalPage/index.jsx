import React from "react";
import ExploreCards from "../../Explore/ExploreCards";
import MainJournal from "../../Explore/MainJournal";
import { Container } from "@mui/material";

const JournalPage = () => {
  return (
    <Container sx={{ padding: "40px 0" }}>
      <MainJournal />
      <ExploreCards />
    </Container>
  );
};

export default JournalPage;
