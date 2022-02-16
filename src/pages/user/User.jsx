import {
  CalendarTodayOutlined,
  EmailOutlined,
  LocationSearchingOutlined,
  Person,
  PersonAddAlt1Outlined,
  PhoneAndroidOutlined,
} from "@mui/icons-material";
import React from "react";
import { user__data } from "../../dummyData";
import "./user.scss";
const User = () => {
  return (
    <div className="user">
      <div className="user__title-container">
        <h2 className="user__title-container__title">Edit user</h2>
        <button className="user__title-container__btn">create</button>
      </div>
      <div className="user__container">
        <div className="user__container__details">
          <div className="user__container__details__top">
            <img
              src={user__data[3].image}
              alt="money"
              className="user__container__details__top-image"
            />
            <div className="user__container__details__top__info">
              <span className="user__container__details__top__info-username">
                dogara jafaru
              </span>
              <span className="user__container__details__top__info-title">
                blockchain expert
              </span>
            </div>
          </div>
          <div className="user__container__details__bottom">
            <span className="user__container__details__bottom-title">
              aaccount details
            </span>
            <ul className="user__container__details__bottom__list">
              <li className="user__container__details__bottom__list__item">
                <Person className="user__container__details__bottom__list__item-icon" />
                <span className="user__container__details__bottom__list__item-info">
                  dogara jafaru
                </span>
              </li>
              <li className="user__container__details__bottom__list__item">
                <CalendarTodayOutlined className="user__container__details__bottom__list__item-icon" />
                <span className="user__container__details__bottom__list__item-info">
                  1993/02/42
                </span>
              </li>
              {/* <li className="user__container__details__bottom__list-item"></li> */}
            </ul>
            <span className="user__container__details__bottom-title">
              contact details
            </span>
            <ul className="user__container__details__bottom__list">
              <li className="user__container__details__bottom__list__item">
                <PhoneAndroidOutlined className="user__container__details__bottom__list__item-icon" />
                <span className="user__container__details__bottom__list__item-info">
                  +823942933
                </span>
              </li>
              <li className="user__container__details__bottom__list__item">
                <EmailOutlined className="user__container__details__bottom__list__item-icon" />
                <span className="user__container__details__bottom__list__item-info">
                  dogaraafaru@gmail.com
                </span>
              </li>
              <li className="user__container__details__bottom__list__item">
                <LocationSearchingOutlined className="user__container__details__bottom__list__item-icon" />
                <span className="user__container__details__bottom__list__item-info">
                  ENYA | KABURASHA
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="user__container__update">update</div>
      </div>
    </div>
  );
};

export default User;
