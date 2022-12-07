import React from "react";
import Heading2 from "../Heading2";
import ExploreCard from "./ExploreCard";
import styles from "./style.module.css";
import ViewButton from "../Featured/ViewButton";
import ExploreCards from "./ExploreCards";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className={styles.container}>
      <div className={styles.exploreSection}>
        <Heading2 heading="explore" />
        <ExploreCards />
        <div className={styles.exploreButton}>
          <Link to="journal">
            <ViewButton value="See the journal" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Explore;
