import React from "react";
import Card from "./card/Card";
import "./cards.scss";
import { card__data } from "../../dummyData";
const Cards = () => {
  return (
    <div className="cards">
      {card__data.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Cards;
