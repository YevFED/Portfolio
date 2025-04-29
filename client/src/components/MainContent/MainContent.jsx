import React, { useEffect, useState } from "react";
import styles from "./MainContent.module.scss";
import Me from "../../assets/Me.png";
import { Link } from "react-router-dom";

const MainContent = () => {
  const words = ["Yevhenii", "Student", "Front-End \n Developer"];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (charIndex <= currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 100); // скорость набора

      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setCharIndex(0);
        setWordIndex((wordIndex + 1) % words.length);
      }, 1000); // пауза перед следующим словом
      return () => clearTimeout(pause);
    }
  }, [charIndex, wordIndex]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        <p className={styles.staticText}>Hello , I'm</p>
        <div className={styles.typingText}>
          {displayedText}
          <span className={styles.cursor}>|</span>
        </div>
        <a className={styles.button} href="#MySkills">
          More Info about me
        </a>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.imageBlock}>
          <img src={Me} alt="photo by me" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
