import React from "react";
import App from "./App.js";

function Main() {
  function handleEditProfileClick() {
    const popupEdit = document.querySelector(".popup_type_edit");
    popupEdit.classList.add("popup_opened");
  }

  function handleEditAvatarClick() {
    const popupAvatar = document.querySelector(".popup_type_change-avatar");
    popupAvatar.classList.add("popup_opened");
  }

  function handleAddCardClick() {
    const popupAddCard = document.querySelector(".popup_type_add-card");
    popupAddCard.classList.add("popup_opened");
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__account">
          <div className="profile__avatar">
            <button
              className="button profile__avatar-edit"
              type="button"
              onClick={handleEditAvatarClick}
            ></button>
          </div>

          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <p className="profile__job">Исследователь океана</p>
            <button
              className="button profile__edit-button"
              type="button"
              onClick={handleEditProfileClick}
            ></button>
          </div>
        </div>
        <button
          className="button profile__add-button"
          type="button"
          onClick={handleAddCardClick}
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__container">
          <template className="cards-template">
            <li className="element">
              <button
                className="button element__delete-button"
                type="button"
              ></button>
              <img className="element__photo" />
              <div className="element__bttm-panel">
                <h2 className="element__title"></h2>
                <div className="element__likes">
                  <button
                    className="button element__like"
                    type="button"
                  ></button>
                  <p className="element__likes-count"></p>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </section>
      <div className="popup popup_type_edit">
        <div className="popup__container">
          <h2 className="popup__header popup__header_type_form">
            Редактировать профиль
          </h2>
          <form className="form" name="profileEditForm" noValidate>
            <input
              type="text"
              className="form__input"
              id="name-input"
              name="nameInput"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="form__input-error name-input-error"></span>
            <input
              type="text"
              className="form__input"
              id="job-input"
              name="jobInput"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="form__input-error job-input-error"></span>
            <button className="button form__save-button" type="submit">
              Сохранить
            </button>
          </form>
          <button className="button popup__close-icon" type="button"></button>
        </div>
      </div>

      <div className="popup popup_type_change-avatar">
        <div className="popup__container">
          <h2 className="popup__header popup__header_type_form">
            Обновить аватар
          </h2>
          <form className="form" name="avatarChangeForm" noValidate>
            <input
              type="url"
              className="form__input"
              id="avatar-url-input"
              name="avatarInput"
              placeholder="Ссылка на фото"
              required
            />
            <span className="form__input-error avatar-url-input-error"></span>
            <button className="button form__save-button" type="submit">
              Сохранить
            </button>
          </form>
          <button className="button popup__close-icon" type="button"></button>
        </div>
      </div>

      <div className="popup popup_type_add-card">
        <div className="popup__container">
          <h2 className="popup__header popup__header_type_form">Новое место</h2>
          <form className="form" name="addCardForm" noValidate>
            <input
              type="text"
              className="form__input"
              id="place-input"
              name="name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="form__input-error place-input-error"></span>
            <input
              type="url"
              className="form__input"
              id="url-input"
              name="link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="form__input-error url-input-error"></span>
            <button className="button form__save-button" type="submit">
              Создать
            </button>
          </form>
          <button className="button popup__close-icon" type="button"></button>
        </div>
      </div>

      <div className="popup popup_type_image">
        <div className="image">
          <img className="image__close-up" />
          <h2 className="image__title"></h2>
          <button className="button popup__close-icon" type="button"></button>
        </div>
      </div>

      <div className="popup popup_type_delete-card">
        <div className="popup__container">
          <h2 className="popup__header popup__header_type_no-form">
            Вы уверены?
          </h2>
          <form className="form" name="deleteCardForm" noValidate>
            <button className="button form__save-button" type="submit">
              Да
            </button>
          </form>
          <button className="button popup__close-icon" type="button"></button>
        </div>
      </div>
    </main>
  );
}

export default Main;
