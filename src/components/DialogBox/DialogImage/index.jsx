import React, { useState } from "react";
import styles from "./style.module.css";
import { Grid } from "@mui/material";

const DialogImage = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  console.log({ selectedImage });
  const handle = (event, index) => {
    event.preventDefault();
    setSelectedImage(index);
  };

  return (
    <Grid
      container
      rowSpacing={2}
      justifyContent="center"
      flexDirection={{ xs: "column-reverse", sm: "row" }}
      style={{ height: "100%" }}
      alignItems="flex-start"
    >
      <Grid
        container
        item
        xs={12}
        sm={3}
        flexDirection={{ xs: "row", sm: "column" }}
        spacing={1}
      >
        {images.map((imagSrc, index) => {
          const selectedImg =
            selectedImage === index ? "selectedSmallImage" : "smallImages";
          return (
            <Grid item sx={3} md={2}>
              <img
                key={index}
                src={imagSrc}
                alt="Product"
                onMouseOver={(event) => handle(event, index)}
                className={`${styles[selectedImg]} `}
              />
            </Grid>
          );
        })}
      </Grid>
      <Grid item xs={12} sm={7}>
        <img
          className={styles.selectedImage}
          src={images[selectedImage]}
          alt="product Img"
        />
      </Grid>
    </Grid>
  );
};

export default DialogImage;
