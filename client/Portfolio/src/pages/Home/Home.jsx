import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Arrrow } from "../../assets/Arrrow";
import "../../assets/_global.css";

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="aboutMe">
          <div className="title">
            <h1>Hi , I am Yevhenii !</h1>
            <h3>And i software engineer</h3>
            <h3>
              from <span className="underline">Ukraine</span>
            </h3>
            <Link className="titleBtn" to="/aboutme">
              About Me
            </Link>
          </div>
          <div className="image">
            {/* must be image!! */}
            image
          </div>
        </div>
        <Arrrow className="arrow" />
        <main>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum
          obcaecati repellat officia, doloremque tenetur!
        </main>
      </div>
    </>
  );
}
