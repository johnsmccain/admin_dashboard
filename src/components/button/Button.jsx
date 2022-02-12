import React from "react";
import "./button.scss";
const Button = ({ type }) => {
  return <button className={`btn ${type}`}>{type}</button>;
};

export default Button;
