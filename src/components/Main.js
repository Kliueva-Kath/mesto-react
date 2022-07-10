import { useEffect, useState } from "react";
import App from "./App.js";
import PopupWithForm from "./PopupWithForm.js";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main({ onEditAvatar, onEditProfile, onAddCard, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((userInfo) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
    api
      .getCards()
      .then((cardsInfo) => {
        setCards(cardsInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__account">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar})` }}
          >
            <button
              className="button profile__avatar-edit"
              type="button"
              onClick={onEditAvatar}
            ></button>
          </div>

          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__job">{userDescription}</p>
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
              <Card key={card._id} card={card} onCardClick={onCardClick} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
