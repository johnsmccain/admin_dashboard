import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React from "react";
import "./card.scss";
const Card = ({ data }) => {
  return (
    <div className={`card ${data.status} `}>
      <div className="card__title">{data.title}</div>
      <div className="card__money">
        <span className="card__money__amount">${data.amount}</span>
        <span className="card__money__return">
          {data.profit}
          {data.status === "loss" ? (
            <ArrowDownward className="card__icon " />
          ) : (
            <ArrowUpward className="card__icon " />
          )}
        </span>
      </div>
      <span className="card__sub">Compare to last month</span>
    </div>
  );
};

export default Card;
