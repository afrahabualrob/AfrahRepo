import React, { useState } from "react";
import styles from "./style.module.css";
// import Carousel from "react-material-ui-carousel";
import NextButton from "../HeaderPart/Buttons/next-button";
import PrevButton from "../HeaderPart/Buttons/prev-button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
// import { style } from "@mui/system";

const SliderSection = () => {
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

  const settings = {
    dots: false,
    // infinite: true,
    swipe: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <PrevButton />,
    prevArrow: <NextButton />,
    accessibility: true,
    adaptiveHeight: true,
    draggable: true,
    speed: 1200,
    slickPrev: true,
    initialSlide: 1,
  };
  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {headerResponse.map((item) => {
          const { id, bg_img, title, btnSrc, btnValue } = item;
          return (
            <div key={id} className={styles.headerSection}>
              <img className={styles.headerImage} src={bg_img} alt={title} />
              <div className={styles.headerContent}>
                <div className={styles.headerWrapper}>
                  <div className={styles.container}>
                    <div className={styles.header}>
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
      </Slider>
    </div>
  );
};

export default SliderSection;
