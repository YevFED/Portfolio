import { Link } from "react-router-dom";
import style from "./ProjectCard.module.css";
import cardData from "../../assets/_data/cardData.js";

export default function ProjectCard() {
  return (
    <>
      {cardData.map((card) => (
        <div className={style.card}>
          <div className={style.imageBox}>
            <img
              src={card.image}
              alt="cardImage"
              width={300}
              style={{ borderRadius: "20px", border: "1px solid white" }}
            />
          </div>
          <div className={style.bottomBlock}>
            <div className={style.cardTitle}>{card.title}</div>
            <Link className={style.cardBtn} to="/aboutme">
              Get more
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
