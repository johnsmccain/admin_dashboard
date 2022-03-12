import React, { useState } from "react";
import {
  Language,
  MenuOpen,
  Notifications,
  Settings,
  Menu,
} from "@mui/icons-material";
import "./topbar.scss";
import avarter from "../../assets/0.png";
import logo from "../../assets/opensea.png";
import { useDispatch } from "react-redux";
import { toggler } from "../../store/toggleSlice";

const Topbar = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(true);
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

        <div
          className="hamburger topbar__container__icon"
          onClick={() => {
            dispatch(toggler());
            setToggle(!toggle);
          }}
        >
          {toggle ? <Menu /> : <MenuOpen />}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
