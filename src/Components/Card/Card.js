import React from "react";
import "./Card.css";

const Card = ({ card }) => {
  let img;
  let names;
  for (const info of card) {
    img = info.image;
    names = info.name;
  }
  return (
    <div>
      <div>
        <h2>This is Digital Markiting!!</h2>
      </div>
      <div className="cards">
        <img className="card-image" src={img} alt="" />
        <h3>{names}</h3>
      </div>
    </div>
  );
};

export default Card;
