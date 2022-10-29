import React, { useState } from "react";
import styles from "./style.module.css";

const DialogDescription = ({ description }) => {
  const [descriptionShowed, setDescriptionShowed] = useState(
    description.substring(1, 180)
  );
  const [open, setOpen] = useState(false);

  const change = () => {
    !open
      ? setDescriptionShowed(description.substring(1))
      : setDescriptionShowed(description.substring(1, 180));
    setOpen(!open);
  };

  return (
    <div className={styles.dialogDesc}>
      <h5 className={styles.descriptionTitle}>description</h5>

      {description.length < 180 ? (
        <span>{description}</span>
      ) : (
        <>
          <span>{descriptionShowed}</span>
          <spans className={styles.showHideBtn} onClick={change}>
            {!open ? "...See More" : "  Show Less"}
          </spans>
        </>
      )}
    </div>
  );
};

export default DialogDescription;
