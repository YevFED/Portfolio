import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <nav className="navigation">
          <Link className="navLink solid" to="/">
            Home
          </Link>
          <Link className="navLink" to="/">
            About Me
          </Link>
          <Link className="navLink" to="/">
            <img src={logo} alt="Logo" width={75} />
          </Link>
          <Link className="navLink" to="/">
            My Projects
          </Link>
          <Link className="navLink" to="/">
            Contacts
          </Link>
        </nav>
      </div>
    </div>
  );
}