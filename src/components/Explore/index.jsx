import React from "react";
import Heading2 from "../Heading2";
import ExploreCard from "./ExploreCard";
import styles from "./style.module.css";
import ViewButton from "../Featured/ViewButton";

const Explore = () => {
  const exploreResponse = [
    {
      id: 0,
      date: "JANUARY 19, 2017",
      title: "Connected Clothing: Raye Padit ",
      description:
        "As a voice 888n, Raye Padit is motivated by the belief that one peRaye Padit is motivated by the belief that one peRaye Padit is motivated by the belief that one peRaye Padit is motivated by the belief that one peRaye Padit is motivated by the belief that one peRaye Padit is motivated by the belief that one peRaye Padit is motivated by the belief that one peRaye Padit is motivated by the belief that one peRaye Padit is motivated by the belief that one peRaye Padit is motivated by the belief that one peRaye Padit is motivated by the belief that one person’s actions ,no matter how small, holds greAs a voice for conscious fashion, Raye Padit is motivated by  the belief that one person’s actions, no matter how small, holds gre",
      imgSrc: "./assets/images/explore1.png",
    },
    {
      id: 2,
      date: "JANUARY 19, 2017",
      title: "Kérastase: A Collaboration",
      description: "",
      imgSrc: "./assets/images/explore2.png",
    },
    {
      id: 3,
      date: "JANUARY 19, 2017",
      title: "Jaclynn Seah",
      description:
        "Jaclynn’s wandering spirit has brought her from the lush greenery of South America to the craters of Indonesia.",
      imgSrc: "",
    },
    {
      id: 4,
      date: "JANUARY 19, 2017",
      title: "Remarkable Resilience: Grace Kim",
      description:
        "A woman in my life who has shown remarkable resilience is my best friend Grace.Since she was a kid, she struggled with general anxiety disorder and panic disorder.",
      imgSrc: "",
    },

    {
      id: 5,
      date: "JANUARY 19, 2017",
      title: "How To Wear The Lounge Lunghi",
      description: "",
      imgSrc: "./assets/images/explore3.png",
    },
  ];
  const filteredExplore = exploreResponse.filter((item, index) => index > 0);

  return (
    <div className={styles.exploreSection}>
      <div className={styles.container}>
        <Heading2 heading="explore" />
        <div className={styles.exploreContent}>
          <div className={styles.exploreContentLeft}>
            <ExploreCard exploreItem={exploreResponse[0]} />
          </div>

          <div className={styles.exploreContentRight}>
            {[] &&
              filteredExplore.map((exploreItem) => {
                return (
                  <div className={styles.exploreContentRight_item}>
                    <ExploreCard exploreItem={exploreItem} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className={styles.exploreButton}>
        <ViewButton value="See the journal" />
      </div>
    </div>
  );
};

export default Explore;
