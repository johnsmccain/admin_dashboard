import React from "react";
import "./smwidget.scss";
import { Visibility } from "@mui/icons-material";
import { user__data } from "../../../dummyData";
const SmWidget = () => {
  return (
    <div className="sm-widget">
      <h3 className="sm-widget__title">new added members</h3>
      <ul className="sm-widget__list">
        {user__data.map((person) => (
          <li className="sm-widget__list__item">
            <img
              src={person.image}
              alt={person.firstName}
              className="sm-widget__list__item__img"
            />
            <div className="sm-widget__list__item__user-info">
              <span className="sm-widget__list__item__user-info__name">
                {person.name}
              </span>
              <span className="sm-widget__list__item__user-info__title">
                {person.title}
              </span>
            </div>
            <button className="sm-widget__list__item__btn">
              <Visibility className="sm-widget__list__item__btn__icon" />{" "}
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SmWidget;
