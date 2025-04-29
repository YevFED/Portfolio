import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <p className={styles.navigate}>My Skils</p>
      <p className={styles.navigate}>About Me</p>

      <p className={styles.navigate}>My projects</p>
    </div>
  );
};

export default Header;
