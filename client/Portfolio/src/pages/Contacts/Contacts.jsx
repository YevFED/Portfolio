import React from "react";
import { Link } from "react-router-dom";
import global from "../../assets/styles/_global.module.css";

export default function Contacts() {
  return (
    <div className={global.wrapper}>
      <nav className="contactsLink">
        <Link to="" className="linkIcon">
          <img src="" alt="" />
        </Link>
        <Link className="linkIcon">
          <img src="" alt="" />
        </Link>
        <Link className="linkIcon">
          <img src="" alt="" />
        </Link>
        <Link className="linkIcon">
          <img src="" alt="" />
        </Link>
      </nav>
    </div>
  );
}
