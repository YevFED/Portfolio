import React from "react";
import ProjectCard from "../../components/projectCard/ProjectCard";
import style from "../myProjects/myProjects.module.css";
import global from "../../assets/styles/_global.module.css";

export default function myProjects() {
  return (
    <>
      <div className={global.wrapper}>
        <div className={style.flexBox}>
          <div className={style.pageTitle}>
            <div className={style.title}>
              Here you can see <br />
              my
              <span className={style.coloredTitle}>Projects!</span>
            </div>
          </div>
          <div className={style.cardTable}>
            <ProjectCard />
          </div>
        </div>
      </div>
    </>
  );
}
