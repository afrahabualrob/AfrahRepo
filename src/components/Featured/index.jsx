import React from "react";
import styles from "./style.module.css";
import Heading2 from "../Heading2";
import FeaturedProducts from '../Featured/FeaturedProducts'

const Featured = () => {
  return (
    <section className={styles.featuredSection}>
      <div className={styles.container}>
        <div>
          <Heading2 heading="featured" />
          <FeaturedProducts />
        </div>
      </div>
    </section>
  );
};

export default Featured;
