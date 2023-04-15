import React from "react";
import Header from "../../components/Header/Header";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="hWrapper">
        <div className="title">
          <h1>Hi , I am Yevhenii !</h1>
          <h3>And i software engineer</h3>
          <h3>from Ukraine</h3>
        </div>
        <div className="image">
          {/* must be image!! */}
          image
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        className="arrow"
      >
        <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
      </svg>
    </>
  );
}
