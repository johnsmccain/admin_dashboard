import React from "react";
import { LineStyle } from "@mui/icons-material";
import "./sidebarList.scss";
const SidebarList = ({ Icon, title }) => {
  return (
    <li className="sidebarList">
      <Icon className="sidebarList__icon" />
      <span>{title}</span>
    </li>
  );
};

export default SidebarList;
