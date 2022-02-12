import React from "react";
import {
  Language,
  MenuOpen,
  Notifications,
  Settings,
} from "@mui/icons-material";
import "./topbar.scss";
import avarter from "../../assets/0.png";
import logo from "../../assets/opensea.png";
const Topbar = () => {
  return (
    <header className="topbar">
      <div className="topbar__container">
        <div className="topbar__container__left">
          <img src={logo} alt="" />
          <span className="logo">AdminApe</span>
        </div>
        <div className="topbar__container__right">
          <div className="topbar__container__right__icon">
            <Notifications className="icon" />
            <span className="badge">2</span>
          </div>
          <div className="topbar__container__right__icon">
            <Language className="icon" />
            <span className="badge">2</span>
          </div>
          <div className="topbar__container__right__icon">
            <Settings className="icon" />
          </div>
          <img src={avarter} alt="" />
        </div>

        <MenuOpen className="topbar__container__icon" />
      </div>
    </header>
  );
};

export default Topbar;
