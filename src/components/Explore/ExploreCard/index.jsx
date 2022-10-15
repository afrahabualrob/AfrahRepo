import React from "react";
import styles from "./style.module.css";

const ExploreCard = ({ exploreItem }) => {
  const { id, date, title, description, imgSrc } = exploreItem;
  return (
    <div>
      <div className={styles.exploreCard} key={id}>
        <article className={styles.exploreContent}>
          {id === 0 ? (
            <div>
              <div className={styles.wrapperCard1}>
                <span className={styles.exploreCard_SubHeading}>
                  FIELDTESTED {date}
                </span>
                <h3 className={styles.exploreCard_title}>{title}</h3>
                <div className={styles.center2}>
                  <p
                    className={`${styles.exploreCard_description} ${styles.firstDesc} `}
                  >
                    {description}
                  </p>
                  <p className={styles.textTooltip}> {description}</p>
                </div>
              </div>
              <img
                className={`${styles.exploreCard_image} ${styles.img1} `}
                src={imgSrc}
                alt={title}
              />
            </div>
          ) : (
            <>
              <span className={styles.exploreCard_SubHeading}>
                FIELDTESTED {date}
              </span>
              <h3 className={styles.exploreCard_title}>{title}</h3>
              {description ? (
                <p className={styles.exploreCard_description}>{description}</p>
              ) : (
                <img
                  className={styles.exploreCard_image}
                  src={imgSrc}
                  alt={title}
                />
              )}
            </>
          )}
        </article>
      </div>
    </div>
  );
};

export default ExploreCard;
