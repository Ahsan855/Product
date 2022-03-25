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
    <div className="card">
      <img className="card-image" src={img} alt="" />
      <h3>{names}</h3>
    </div>
  );
};

export default Card;
