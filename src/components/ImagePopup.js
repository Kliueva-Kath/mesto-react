import React from "react";

function ImagePopup({ isOpen, card, onClose }) {
  return (
    <div className={`popup popup_type_image ${isOpen && "popup_opened"}`}>
      <div className="image">
        <img className="image__close-up" src={card.link} alt={card.name} />
        <h2 className="image__title">{card.name}</h2>
        <button
          className="button popup__close-icon"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
