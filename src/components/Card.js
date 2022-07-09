import React from "react";
import App from "./App.js";
import Main from "./Main.js";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
      <button className="button element__delete-button" type="button"></button>
      <img
        className="element__photo"
        src={`${props.card.link}`}
        alt={`${props.card.name}`}
        onClick={handleClick}
      />
      <div className="element__bttm-panel">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__likes">
          <button className="button element__like" type="button"></button>
          <p className="element__likes-count">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
