import React from "react";
import styles from "./style.module.css";
import Carousel from "react-material-ui-carousel";
import NextButton from "../HeaderPart/Buttons/next-button";
import PrevButton from "../HeaderPart/Buttons/prev-button";

const index = () => {
  const headerResponse = [
    {
      id: 1,
      bg_img: "./assets/images/bg_header.png",
      title: "Perfume Tips Tricks2",
      btnSrc: "#",
      btnValue: "shop now",
    },
    {
      id: 2,
      bg_img: "./assets/images/bg_header2.png",
      title: "Perfume Tips Tricks",
      btnSrc: "#",
      btnValue: "shop now",
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
                      <a className={styles.linkButton} href={btnSrc}>
                        {btnValue}
                      </a>
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
