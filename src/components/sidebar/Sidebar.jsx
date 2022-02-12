import React from "react";
import "./sidebar.scss";
import SidebarList from "./sidebarList/SidebarList";

import { dashboard, quickmenu, notificaions, staff } from "../../dummyData";
const Sidebar = () => {
  return (
    <div className="sidebar hide-for-mobile">
      <div className="sidebar__container">
        <div className="sidebar__container__menu">
          <h4 className="sidebar__container__menu__title">Dashboard</h4>
          <ul className="sidebar__container__menu__list">
            {dashboard.map((item) => (
              <SidebarList Icon={item.Icon} title={item.title} />
            ))}
          </ul>
        </div>
        <div className="sidebar__container__menu">
          <h4 className="sidebar__container__menu__title">Quick Menu</h4>
          <ul className="sidebar__container__menu__list">
            {quickmenu.map((item) => (
              <SidebarList Icon={item.Icon} title={item.title} />
            ))}
          </ul>
        </div>
        <div className="sidebar__container__menu">
          <h4 className="sidebar__container__menu__title">Notification</h4>
          <ul className="sidebar__container__menu__list">
            {notificaions.map((item) => (
              <SidebarList Icon={item.Icon} title={item.title} />
            ))}
          </ul>
        </div>
        <div className="sidebar__container__menu">
          <h4 className="sidebar__container__menu__title">Staff</h4>
          <ul className="sidebar__container__menu__list">
            {staff.map((item) => (
              <SidebarList Icon={item.Icon} title={item.title} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;