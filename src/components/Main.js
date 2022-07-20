import { useEffect, useState, useContext } from "react";
import App from "./App.js";
import PopupWithForm from "./PopupWithForm.js";
import api from "../utils/Api.js";
import Card from "./Card.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddCard,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__account">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          >
            <button
              className="button profile__avatar-edit"
              type="button"
              onClick={onEditAvatar}
            ></button>
          </div>

          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <p className="profile__job">{currentUser.about}</p>
            <button
              className="button profile__edit-button"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
        </div>
        <button
          className="button profile__add-button"
          type="button"
          onClick={onAddCard}
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__container">
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
