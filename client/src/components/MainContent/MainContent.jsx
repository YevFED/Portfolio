import React from "react";
import styles from "./MainContent.module.scss";
import Me from "../../assets/Me.png";

const MainContent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSide}></div>

      <div className={styles.rightSide}>
        <img src={Me} alt="photo by me" />
      </div>
    </div>
  );
};

export default MainContent;
