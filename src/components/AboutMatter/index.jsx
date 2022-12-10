import React from "react";
import styles from "./style.module.css";
import Heading2 from "../Heading2";

const AboutMatter = () => {
  const aboutMatter = [
    {
      days: 123456,
      countries: ["India", "China", "Sri Lanka"],
      designers: 12,
      factories: 12,
    },
  ];
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <Heading2 heading="About Matter" />
        <div className={styles.aboutWrapper}>
          <img
            className={styles.aboutImage}
            src="./assets/images/about.png"
            alt="This is about design "
          />
          <div className={styles.aboutContent}>
            <h4 className={styles.aboutDescription}>
              Our mission is threefold - to foster designer-artisan
              collaborations, inspire consumers to value provenance and process,
              and pioneer industry change and sustainability for rural textile
              communities.
            </h4>
            {[] &&
              aboutMatter.map((item, index) => {
                const { days, countries, designers, factories } = item;
                return (
                  <div key={index}>
                    <div>
                      <p className={styles.category}>
                        Artisan Employment Days Created
                      </p>
                      <p className={styles.categoryItem}>{days}</p>
                    </div>
                    <div>
                      <p className={styles.category}>
                        Countries Involved To Date
                      </p>
                      {countries.map((item, index) => {
                        return (
                          <p key={index} className={styles.categoryItem}>
                            {item}
                          </p>
                        );
                      })}
                    </div>
                    <div>
                      <p className={styles.category}>#MatterTribe </p>
                      <p className={styles.categoryItem}>
                        {designers}designers
                      </p>
                      <p className={styles.categoryItem}>
                        {factories} factories
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMatter;
