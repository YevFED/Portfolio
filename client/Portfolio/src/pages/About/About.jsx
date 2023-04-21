import style from "./About.module.css";
import global from "../../assets/styles/_global.module.css";

export default function About() {
  return (
    <>
      <div className={global.wrapper}>
        <div className={style.title}>About Me</div>
      </div>
    </>
  );
}
