import React from "react";
import styles from "./style.module.css";
import Carousel from "react-material-ui-carousel";
import NextButton from "../HeaderPart/Buttons/next-button";
import PrevButton from "../HeaderPart/Buttons/prev-button";
import { Link } from "react-router-dom";

const index = () => {
  const headerResponse = [
    {
      id: 1,
      bg_img: "./assets/images/bg_header.png",
      title: "Perfume Tips Tricks2",
  
    },
    {
      id: 2,
      bg_img: "./assets/images/bg_header2.png",
      title: "Perfume Tips Tricks",

    },
  ];
  return (
    <Carousel
      PrevIcon={<PrevButton />}
      NextIcon={<NextButton />}
      indicatorIconButtonProps={{
        style: {
          backgroundColor: "pink",
        },
      }}
      navButtonsAlwaysVisible={true}
      navButtonsAlwaysInvisible={false}
      indicators={false}
      autoPlay={false}
      fullHeightHover={false}
      sx={{ height: "100%" }}
    >
      {[] &&
        headerResponse.map((item) => {
          const { id, bg_img, title, btnSrc, btnValue } = item;
          return (
            <div key={id} className={styles.headerSection}>
              <img className={styles.headerImage} src={bg_img} alt={title} />
              <div className={styles.headerContent}>
                <div className={styles.headerWrapper}>
                  <div className={styles.container}>
                    <div>
                      <h1 className={styles.mainHeading}>{title}</h1>
                      <Link to="shop" className={styles.linkButton}>
                        shop now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </Carousel>
  );
};

export default index;
