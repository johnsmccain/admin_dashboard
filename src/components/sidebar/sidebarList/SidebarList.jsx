import React from "react";
// import { LineStyle } from "@mui/icons-material";
import "./sidebarList.scss";
import { Link } from "react-router-dom";
const SidebarList = ({ Icon, title, to }) => {
  return (
    <Link to={`${to}`} className="sidebarList">
      <Icon className="sidebarList__icon" />
      <span>{title}</span>
    </Link>
  );
};

export default SidebarList;
