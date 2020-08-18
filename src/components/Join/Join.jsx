import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">
          PPAB UKT <br /> Private Chatroom
        </h1>
        <form
          onKeyPress={(e) =>
            name && room && e.key === "Enter" ? setRoom(e.target.value) : null
          }
        >
          <div>
            <input
              type="text"
              placeholder="username"
              className="joinInput"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="room"
              className="joinInput mt-20"
              onChange={(e) => {
                setRoom(e.target.value);
              }}
            />
          </div>
          <Link
            onClick={(e) => {
              if (!name || !room) {
                e.preventDefault();
              }
            }}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className="button mt-20" type="submit">
              Enter
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Join;
