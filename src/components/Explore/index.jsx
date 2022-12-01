import React from "react";
import Heading2 from "../Heading2";
import ExploreCard from "./ExploreCard";
import styles from "./style.module.css";
import ViewButton from "../Featured/ViewButton";
import ExploreCards from "./ExploreCards";

const Explore = () => {
  return (
    <div className={styles.container}>
      <div className={styles.exploreSection}>
        <Heading2 heading="explore" />
        <ExploreCards />
        <div className={styles.exploreButton}>
          <ViewButton value="See the journal" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
