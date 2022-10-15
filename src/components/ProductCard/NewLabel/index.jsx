import React from "react";
import styles from "./style.module.css";

const NewLabel = ({ date }) => {
  const addedDate = new Date(date);
  const currentDate = new Date();

  const findDays = (currentDate, date) => {
    let difference = currentDate.getTime() - date.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays < 15;
  };
  return (
    <div>
      {findDays(currentDate, addedDate) ? (
        <label className={styles.newButton}> New</label>
      ) : null}
    </div>
  );
};

export default NewLabel;
