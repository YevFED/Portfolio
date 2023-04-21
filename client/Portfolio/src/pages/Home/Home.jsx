import React from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import { Arrow } from "../../assets/Arrow";
import global from "../../assets/styles/_global.module.css";

export default function Home() {
  return (
    <>
      <div className={global.wrapper}>
        <div className={style.aboutMe}>
          <div className={style.title}>
            <h1>Hi , I am Yevhenii !</h1>
            <h3>And i software engineer</h3>
            <h3>
              from <span className={style.underline}>Ukraine</span>
            </h3>
            <Link className={style.titleBtn} to="/aboutme">
              About Me
            </Link>
          </div>
          <div className={style.image}>
            {/* must be image!! */}
            image
          </div>
        </div>
        <Arrow className={style.arrow} />
        <main>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum
          obcaecati repellat officia, doloremque tenetur!
        </main>
      </div>
    </>
  );
}
