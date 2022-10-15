import React from "react";
import Heading2 from "../Heading2";
import styles from "./style.module.css";

const AsYouSeen = () => {
  return (
    <section className={styles.asYouSeenSection}>
      <div className={styles.container}>
        <Heading2 heading="As You Seen" />
        <img
          className={styles.companiesImage}
          src="./assets/images/companies.png"
          alt="aaa"
        />
      </div>
    </section>
  );
};

export default AsYouSeen;
