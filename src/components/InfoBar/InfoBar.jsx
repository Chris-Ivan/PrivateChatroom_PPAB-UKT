import React from "react";

import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";

import "./InfoBar.css";
import Popup from "./Popup/Popup";

const InfoBar = ({ room }) => {
  return (
    <>
      <div className="infoBar">
        <div className="leftInnerContainer">
          <img src={onlineIcon} alt="online icon" className="onlineIcon" />
          <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
          <a href="/">
            <img src={closeIcon} alt="close icon" />
          </a>
        </div>
      </div>
      <Popup />
    </>
  );
};

export default InfoBar;
