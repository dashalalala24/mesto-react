import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="cards__item">
      <img
        className="cards__image"
        alt={`Фотография: ${card.name}`}
        src={card.link}
        onClick={handleClick}
      />
      <button
        className="cards__delete-button"
        type="button"
        aria-label="Удалить карточку"></button>
      <div className="cards__element">
        <h2 className="cards__name">{card.name}</h2>
        <div className="cards__like-container">
          <button
            className="cards__like"
            type="button"
            aria-label="Нравится"></button>
          <p className="cards__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;