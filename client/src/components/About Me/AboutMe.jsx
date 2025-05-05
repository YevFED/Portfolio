import React from "react";
import { motion } from "framer-motion";
import styles from "./AboutMe.module.scss";
import cards from "./cards";

const AboutMe = () => {
  return (
    <div className={styles.wrapper} id="about">
      <h1 className={styles.aboutTitle}>Who am I? / About Me</h1>
      <div className={styles.aboutDescBlock}>
        {cards.map((card) => (
          <>
            {card.start ? (
              <div className={styles.aboutDescStart}>
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className={styles.descStartBlock}
                >
                  <p className={styles.descText}>{card.answer}</p>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, x: 200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className={styles.descQuestion}
                >
                  {card.question}
                </motion.p>
              </div>
            ) : (
              <div className={styles.aboutDescStart}>
                <motion.p
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className={styles.descQuestion}
                >
                  {card.question}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: 200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className={styles.descStartBlock}
                >
                  <p className={styles.descText}>{card.answer}</p>
                </motion.div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
