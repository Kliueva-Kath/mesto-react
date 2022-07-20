import React from "react";

function PopupWithForm({
  name,
  isOpen,
  title,
  children,
  buttonText,
  onClose,
  onSubmit,
  isLoading,
  loadingText,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <h2 className="popup__header popup__header_type_form">{title}</h2>
        <form
          className="form"
          name={`${name}-form`}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button className="button form__save-button" type="submit">
            {isLoading ? loadingText : buttonText}
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
