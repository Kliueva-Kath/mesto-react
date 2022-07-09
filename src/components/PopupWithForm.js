import React from "react";
import App from "./App.js";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <h2 className="popup__header popup__header_type_form">{props.title}</h2>
        <form className="form" name={`${props.name}-form`} noValidate>
          {props.children}
        </form>
        <button
          className="button popup__close-icon"
          type="button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
