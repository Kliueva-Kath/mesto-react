import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Card({
  onCardClick,
  onCardLike,
  onCardDelete,
  card,
  onDeleteCardClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `element__delete-button ${
    isOwn ? "element__delete-button_visible" : ""
  }`;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((item) => item._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `button element__like ${
    isLiked ? "element__like_active" : ""
  }`;

  // событие клика на картинку
  function handleClick() {
    onCardClick(card);
  }

  // событие лайка
  function handleLikeClick() {
    onCardLike(card);
  }
  // событие клика накнопку удаления
  function handleDeleteClick() {
    onDeleteCardClick(card);
  }

  return (
    <li className="element">
      <button
        className={cardDeleteButtonClassName}
        type="button"
        onClick={handleDeleteClick}
      ></button>
      <img
        className="element__photo"
        src={`${card.link}`}
        alt={`${card.name}`}
        onClick={handleClick}
      />
      <div className="element__bttm-panel">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__likes">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          ></button>
          <p className="element__likes-count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
