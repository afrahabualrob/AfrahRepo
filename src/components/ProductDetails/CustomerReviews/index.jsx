import React from "react";
import { Typography, Rating, Grid, Container, Paper } from "@mui/material";
import Heading2 from "../../Heading2";

const CustomerReviews = ({ rating = 4 }) => {
  return (
    <section style={{ background: "#fcfcfc" }}>
      <Container maxWidth="md" sx={{ py: 4}}>
        <Heading2 heading="Customer Reviews" />
        <Grid container spacing={2}>
          <Grid item>
            <Rating
              name="read-only"
              value={rating}
              readOnly
              sx={{ color: "#FF6008" }}
            />
          </Grid>
          <Grid item>
            <Typography component="legend">{rating} of 5</Typography>
          </Grid>
        </Grid>
        <Typography variant="subtitle1" gutterBottom>
          Top Customers Reviews
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <Rating
              name="read-only"
              value={rating}
              readOnly
              sx={{ color: "#FF6008" }}
            />
          </Grid>
          <Grid item>
            <Typography component="legend">{rating} of 5</Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" gutterBottom>
          Millions of Americans turn to Lasik Surgery when their vision is less
          than perfect and they’re tired of being tied down to wearing glasses
          or contacts. What part of the eye is it that may be causing all your
          vision trouble? Your cornea! When the shape of your cornea is
          irregular, the image on your retina is blurry and out-of-focus. The
          cornea is a part of your eye that works to focus light and projects an
          image on the retina. This focusing of light is called refraction. The
          3 main types of refractive errors are myopia (nearsightedness),
          hyperopia (farsightedness) and astigmatism.{" "}
        </Typography>
      </Container>
    </section>
  );
};

export default CustomerReviews;
