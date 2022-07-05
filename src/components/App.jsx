import React from "react";
import Header from "./Header.js"

function App() {
  return (
    <div className="page">
      <Header />
      <main className="content">
        <section className="profile">
          <div className="profile__account">
            <div className="profile__avatar">
              <button
                className="button profile__avatar-edit"
                type="button"
              ></button>
            </div>
            <div className="profile__info">
              <h1 className="profile__name"></h1>
              <p className="profile__job"></p>
              <button
                className="button profile__edit-button"
                type="button"
              ></button>
            </div>
          </div>
          <button className="button profile__add-button" type="button"></button>
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
                    <button className="button element__like" type="button"></button>
                    <p className="element__likes-count"></p>
                  </div>
                </div>
              </li>
            </template>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
      </footer>

      <div className="popup popup_type_edit">
        <div className="popup__container">
          <h2 className="popup__header popup__header_type_form">
            Редактировать профиль
          </h2>
          <form className="form" name="profileEditForm" novalidate>
            <input
              type="text"
              className="form__input"
              id="name-input"
              name="nameInput"
              placeholder="Имя"
              minlength="2"
              maxlength="40"
              required
            />
            <span className="form__input-error name-input-error"></span>
            <input
              type="text"
              className="form__input"
              id="job-input"
              name="jobInput"
              placeholder="О себе"
              minlength="2"
              maxlength="200"
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
          <h2 className="popup__header popup__header_type_form">Обновить аватар</h2>
          <form className="form" name="avatarChangeForm" novalidate>
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
          <form className="form" name="addCardForm" novalidate>
            <input
              type="text"
              className="form__input"
              id="place-input"
              name="name"
              placeholder="Название"
              minlength="2"
              maxlength="30"
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
          <h2 className="popup__header popup__header_type_no-form">Вы уверены?</h2>
          <form className="form" name="deleteCardForm" novalidate>
            <button className="button form__save-button" type="submit">Да</button>
          </form>
          <button className="button popup__close-icon" type="button"></button>
        </div>
      </div>
    </div>
  );
}

export default App;