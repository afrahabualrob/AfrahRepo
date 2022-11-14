import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { Grid, Container } from "@mui/material";

const BackGround = ({ expandedItem }) => {
  const expandedItems = [
    {
      id: 0,
      name: "Mater shops",
      description: "This is one of top eCommerce platforms online",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxtMmzBqpUJagKwBZ5C4kVF1NJht0VlMnfWqAheU65Jnn74Wic4_b8-hxavbgRmQIJGY&usqp=CAU",
    },
    {
      id: 1,
      name: "clothes",
      description: "This is a Cloths Category",
      img: "https://p0.piqsels.com/preview/207/312/923/school-sale-clothes-shopping-thumbnail.jpg",
    },
    {
      id: 2,
      name: "others",
      description: "This is a Others Category",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSotaOCs6SXv2FbhdyVxH70iENWwkUWtgjQZg&usqp=CAU",
    },
    {
      id: 3,
      name: "women's clothing",
      description: "This is a women's clothing",
      img: "https://siteimages.simplified.co/background-remover/background-remover-women-clothes-image-4.png",
    },
    {
      id: 4,
      name: "men's clothing",
      description: "This is a men's clothing",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1mytNwT-TOnxnE6TizIKOjN-UzEBZQAMFC2zV5-7rCCnKOee-O-ZqgmsghJGoodrYFm4&usqp=CAU",
    },
    {
      id: 5,
      name: "jewelery",
      description: "This is a jewelery",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0JKY6mpWS-JnfDiHNc_zxzMK6bRUiamMHqNGn9rBrOUwXN3gotHJ6HT-1MC-4DcWm0s&usqp=CAU",
    },
    {
      id: 6,
      name: "electronics",
      description: "This is a electronics",
      img: "https://thumbs.dreamstime.com/b/top-view-creative-flat-lay-photo-modern-workplace-laptop-top-view-laptop-background-copy-space-white-background-top-143791420.jpg",
    },
  ];
  const [s, setS] = useState("");
  useEffect(() => {
    setS(expandedItems.find((item) => item.name === expandedItem));
    console.log(s)
    
},[expandedItem])
 
  return (
    <div className={styles.headerSection}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={6}>
            <h2 className={styles.title}>{s?.name}</h2>
            <p className={styles.description}>
              {s?.description}
            </p>
          </Grid>
          <Grid item xs="auto">
            <img
              src={s?.img}
              alt={s?.name}
              className={styles.background}
            />
          </Grid>
        </Grid>

        {/* <div
        style={{ backgroundColor: `url(${selected[0]?.img})` }}
        className={styles.background}
      ></div> */}
      </Container>
    </div>
  );
};

export default BackGround;
