import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {users ? (
      <div>
        <div className="textContainerOnline">
          <h3>People online:</h3>
        </div>
        <div className="activeContainer">
          {users.map(({ name }) => (
            <div key={name} className="activeItem">
              <p>{name}</p>
              <img alt="Online Icon" src={onlineIcon} />
            </div>
          ))}
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
