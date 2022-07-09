import React from "react";
import App from "./App.js";

function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <div className="image">
        <img className="image__close-up" />
        <h2 className="image__title"></h2>
        <button className="button popup__close-icon" type="button"></button>
      </div>
    </div>
  );
}

export default ImagePopup;
