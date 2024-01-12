import { useState } from "react";
import styles from "./styles/stylesRate.module.css";

function Rate(props) {
  const [active, setActive] = useState(false);
  const handleClicked = () => {
    setActive(!active);
  };

  return (
    <div
      onMouseEnter={handleClicked}
      onMouseLeave={handleClicked}
      className={
        active
          ? `${styles.card} ${styles[props.color]} ${styles.active}`
          : `${styles.card} ${styles[props.color]}`
      }
    >
      <h2 className={styles.h2}>{props.rateName}</h2>
      <div className={styles.price}>
        <div>руб</div>
        <div className={styles.bigFont}>{props.price}</div>
        <div>/мес</div>
      </div>
      <div className={styles.speed}>{props.speed}</div>
      <div className={styles.volume}>{props.volume}</div>
    </div>
  );
}
export default Rate;
