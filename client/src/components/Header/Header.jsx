import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <p className={styles.navigate}>My Skils</p>
      <a href="#about" className={styles.navigate}>
        About Me
      </a>

      <p className={styles.navigate}>My projects</p>
    </div>
  );
};

export default Header;
