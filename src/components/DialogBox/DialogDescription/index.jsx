import React, { useState } from "react";
import styles from './style.module.css'

const GG = () => {
  const description =
    " Build enlogic is w compos.  can easily pass rich data thsulated compcan easily pass rich data thsulated compcan easily pass rich data thsulated compcan easily pass rich data thsulated compcan easily pass rich data thsulated compcan easily pass rich data thsulated compcan easily pass rich data thsulated components that manage";
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

export default GG;
