import { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

export default function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser,
  isLoading,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [values, setValues] = useState({ name: "", about: "" });

  // установка значений инпутов при открытии попапа и при получении данных о пользователе
  useEffect(() => {
    setValues({ name: currentUser.name, about: currentUser.about });
  }, [currentUser, isOpen]);

  function handleChange(evt) {
    const { value, name } = evt.target;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser(values);
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      buttonText="Cохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      loadingText="Сохранение..."
    >
      <input
        type="text"
        className="form__input"
        id="name-input"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        value={values.name || ""}
        name="name"
        onChange={handleChange}
        required
      />
      <span className="form__input-error name-input-error"></span>
      <input
        type="text"
        className="form__input"
        id="job-input"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        value={values.about || ""}
        name="about"
        onChange={handleChange}
        required
      />
      <span className="form__input-error job-input-error"></span>
    </PopupWithForm>
  );
}
