import React, { useState } from "react";

import closeIcon from "../../../icons/closeIcon.png";

import "./Popup.css";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);
  return isOpen ? (
    <div className="popupContainer">
      <div className="leftPopupContainer">
        <p>
          Every message is only available on the client side and refreshing the
          page will clean your history
        </p>
      </div>
      <div
        onClick={() => {
          setIsOpen(false);
        }}
        className="rightPopupContainer"
      >
        <img src={closeIcon} alt="close icon" />
      </div>
    </div>
  ) : null;
};

export default Popup;
