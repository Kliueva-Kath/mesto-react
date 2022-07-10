import React from "react";
import App from "./App.js";

function PopupWithForm({ name, isOpen, title, children, buttonText, onClose }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <h2 className="popup__header popup__header_type_form">{title}</h2>
        <form className="form" name={`${name}-form`} noValidate>
          {children}
          <button className="button form__save-button" type="submit">
            {buttonText}
          </button>
        </form>
        <button
          className="button popup__close-icon"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
