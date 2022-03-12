import React from "react";
// import { LineStyle } from "@mui/icons-material";
import "./sidebarList.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggler } from "../../../store/toggleSlice";
const SidebarList = ({ Icon, title, to }) => {
  const dispatch = useDispatch();
  return (
    <Link
      to={`${to}`}
      onClick={() => dispatch(toggler())}
      className="sidebarList"
    >
      <Icon className="sidebarList__icon" />
      <span>{title}</span>
    </Link>
  );
};

export default SidebarList;
