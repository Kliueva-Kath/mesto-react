import React from "react";
import App from "./App.js";

function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_image ${props.isOpen ? "popup_opened" : ""}`}
    >
      <div className="image">
        <img
          className="image__close-up"
          src={props.card.link}
          alt={props.card.name}
        />
        <h2 className="image__title"></h2>
        <button
          className="button popup__close-icon"
          type="button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
