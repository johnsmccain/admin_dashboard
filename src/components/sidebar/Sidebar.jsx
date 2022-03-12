// import React,{useState} from "react";
import "./sidebar.scss";
import SidebarList from "./sidebarList/SidebarList";
// const [toggle, setToggle] = useState(false);
import { dashboard, quickmenu, notificaions, staff } from "../../dummyData";
import { useDispatch, useSelector } from "react-redux";
import { toggler } from "../../store/toggleSlice";
const Sidebar = () => {
  const toggle = useSelector((state) => state.toggler.isToggle);

  const dispatch = useDispatch();
  return (
    <>
      <div
        className="overlay hide-for-mobile"
        id={toggle && "show-for-mobile"}
        onClick={() => dispatch(toggler())}
      ></div>
      <div
        className={`sidebar hide-for-mobile `}
        id={toggle && "show-for-mobile"}
      >
        <div className="sidebar__container">
          <div className="sidebar__container__menu">
            <h4 className="sidebar__container__menu__title">Dashboard</h4>
            <ul className="sidebar__container__menu__list">
              {dashboard.map((item) => (
                <SidebarList
                  Icon={item.Icon}
                  title={item.title}
                  to={item.directory}
                />
              ))}
            </ul>
          </div>
          <div className="sidebar__container__menu">
            <h4 className="sidebar__container__menu__title">Quick Menu</h4>
            <ul className="sidebar__container__menu__list">
              {quickmenu.map((item) => (
                <SidebarList
                  Icon={item.Icon}
                  title={item.title}
                  to={item.directory}
                />
              ))}
            </ul>
          </div>
          <div className="sidebar__container__menu">
            <h4 className="sidebar__container__menu__title">Notification</h4>
            <ul className="sidebar__container__menu__list">
              {notificaions.map((item) => (
                <SidebarList
                  Icon={item.Icon}
                  title={item.title}
                  to={item.directory}
                />
              ))}
            </ul>
          </div>
          <div className="sidebar__container__menu">
            <h4 className="sidebar__container__menu__title">Staff</h4>
            <ul className="sidebar__container__menu__list">
              {staff.map((item) => (
                <SidebarList
                  Icon={item.Icon}
                  title={item.title}
                  to={item.directory}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
