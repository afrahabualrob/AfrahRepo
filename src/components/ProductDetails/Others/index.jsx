import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import { useShoppingCart } from "../../../Context/ShoppingCartContext";
import styles from "./style.module.css";
import useMultipleRandom from "../../../hook/useMultipleRandom.js"

const Others = () => {
  const { productsJson } = useShoppingCart();


  return (
    <section style={{ padding: "30px 0" }}>
      <img
        src="/assets/images/det.png"
        alt="details picture"
        className={styles.image}
      />
      <Container maxWidth="md">
        <Typography variant="body1" gutterBottom color="#666666">
          I have taste grilled meats around the world. Before i will guide you
          to the various technologies (gas barbecues, charcoal barbecues,
          Mongolian, sauces, recipes ) i will tell you about the Greek way.
        </Typography>

        <Typography variant="body1" gutterBottom color="#33333A" sx={{ py: 3 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </Container>

      <Container>
        <Grid container justifyContent="space=-between" spacing={6}>
          {useMultipleRandom(productsJson, 3).map((product) => (
            <Grid item xs={12} sm={4}>
              <img src={product.image} width="80%" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Others;
