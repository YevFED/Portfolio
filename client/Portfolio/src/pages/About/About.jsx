import style from "./About.module.css";
import global from "../../assets/styles/_global.module.css";
import { Arrow } from "../../assets/Arrow";

export default function About() {
  return (
    <>
      <div className={global.wrapper}>
        <div className={style.textBlock}>
          <h1 className={style.title}>Here some information about me!</h1>
          <p className={style.info}>
            Hi , my name is Yevhenii or Yev and i Front End Developer from
            Ukraine <br /> Im studying : HTML , CSS , JavaScript, React , Node
            Js,
          </p>
          <p className={style.info}>
            I'm have start learning Front End Development when i was 15 <br /> I
            have seen a YouTube video where Developer <br /> make a website with
            using HTML and CSS
          </p>
          <p className={style.info}>
            At next day i was try to make something myself without any help .{" "}
            <br /> I was make a easy website with some input's and <br />
            button's what redirected client to another page when you click on
            it.
          </p>
          <p className={style.info}>
            When i finished this easiest project at my life <br /> i have think
            i was make to much and i'm a big Developer in my mind <br />
          </p>
        </div>
        <Arrow />
        <div
          className={style.textBlock}
          style={{
            paddingRight: "100px",
            paddingTop: "0",
            textAlign: "right",
          }}
        >
          <h2 className={style.title}>What i should do next ?</h2>
          <p className={style.info}>helsfsd</p>
        </div>
      </div>
    </>
  );
}
