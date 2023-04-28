import React from "react";
import { Link } from "react-router-dom";
import global from "../../assets/styles/_global.module.css";
import style from "./Contacts.module.css";
// icons
import instagram from "../../assets/img/instagram.svg";
import github from "../../assets/img/github.svg";
import gmail from "../../assets/img/gmail.svg";

export default function Contacts() {
  return (
    <div className={global.wrapper}>
      <div className={style.formWindow}>
        <p className={style.title}>Text me for callback!</p>
        <form action="" className={style.form} method="post">
          <input
            className={style.formInput}
            placeholder="Type Your Name:"
            type="text"
          />
          <input
            className={style.formInput}
            placeholder="Type Your Name:"
            type="text"
          />
          <input
            className={style.formInput}
            placeholder="Type Your Email address:"
            type="email"
          />
        </form>
        <button className={style.submitButton}>Send</button>
        <p style={{ color: "white", fontSize: "14px", marginTop: "30px" }}>
          Here you can find my works or projects :
        </p>
        <nav className={style.links}>
          <Link
            to="https://www.instagram.com/flayeeeer/"
            className={style.linkIcon}
            target="_blank"
          >
            <img
              className={style.iconImg}
              src={instagram}
              alt="instagramIcon"
              width={35}
            />
          </Link>
          <Link
            to="https://github.com/YevFED"
            className={style.linkIcon}
            target="_blank"
          >
            <img
              className={style.iconImg}
              src={github}
              alt="githubIcon"
              width={35}
            />
          </Link>
          <Link
            to="mailto:yevheniidev2@gmail.com"
            className={style.linkIcon}
            target="_blank"
          >
            <img
              className={style.iconImg}
              src={gmail}
              alt="gmailIcon"
              width={35}
            />
          </Link>
        </nav>
      </div>
    </div>
  );
}
