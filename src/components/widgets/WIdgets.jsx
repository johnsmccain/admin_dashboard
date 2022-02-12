import React from "react";
import LgWidget from "./lgWidget/LgWidget";
import SmWidget from "./smWidget/SmWidget";
import "./widgets.scss";
const WIdgets = () => {
  return (
    <div className="widgets">
      <SmWidget />
      <LgWidget />
    </div>
  );
};

export default WIdgets;
