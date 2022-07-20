import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm.js";

export default function AddPlacePopup({ isOpen, onClose, onAddCard }) {
  const [values, setValues] = useState({ name: "", link: "" });

  useEffect(() => {
    setValues({ name: "", about: "" });
  }, [isOpen]);

  function handleChange(evt) {
    const { value, name } = evt.target;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddCard(values);
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="form__input"
        id="place-input"
        name="name"
        value={values.name || ""}
        placeholder="Название"
        minLength="2"
        maxLength="30"
        onChange={handleChange}
        required
      />
      <span className="form__input-error place-input-error"></span>
      <input
        type="url"
        className="form__input"
        id="url-input"
        name="link"
        value={values.link || ""}
        placeholder="Ссылка на картинку"
        onChange={handleChange}
        required
      />
      <span className="form__input-error url-input-error"></span>
    </PopupWithForm>
  );
}
