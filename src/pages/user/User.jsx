import {
  CalendarTodayOutlined,
  EmailOutlined,
  LocationSearchingOutlined,
  Person,
  PhoneAndroidOutlined,
  Publish,
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
        <div className="user__container__update">
          <h2 className="user__container__update-title">edit</h2>
          <form className="user__container__update__form">
            <div className="user__container__update__form__group">
              <label className="user__container__update__form__group-title">
                username
              </label>
              <input
                type="text"
                className="user__container__update__form__group-control"
                placeholder=""
                required
              />
            </div>
            <div className="user__container__update__form__group">
              <label className="user__container__update__form__group-title">
                full name
              </label>
              <input
                type="text"
                className="user__container__update__form__group-control"
                placeholder="dogara jafaru"
                required
              />
            </div>
            <div className="user__container__update__form__group">
              <label className="user__container__update__form__group-title">
                email
              </label>
              <input
                type="email"
                className="user__container__update__form__group-control"
                placeholder="dogara@gmail.com"
                required
              />
            </div>
            <div className="user__container__update__form__group">
              <label className="user__container__update__form__group-title">
                phone
              </label>
              <input
                type="number"
                className="user__container__update__form__group-control"
                placeholder="823942933"
                required
              />
            </div>
            <div className="user__container__update__form__group">
              <label className="user__container__update__form__group-title">
                address
              </label>
              <input
                type="text"
                className="user__container__update__form__group-control"
                placeholder="ENYA | KABURASHA"
                required
              />
            </div>
          </form>
          <div className="user__container__update__right">
            <div className="user__container__update__right__profile">
              <img
                src={user__data[3].image}
                alt=""
                className="user__container__update__right__profile-avatar"
              />

              <label
                htmlFor="upload"
                className="user__container__update__right__profile-icon"
              >
                <Publish />
                <input type="file" style={{ display: "none" }} id="upload" />
              </label>
            </div>
            <button className="user__container__update__right-btn">
              update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
