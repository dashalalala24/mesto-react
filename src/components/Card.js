import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="cards__item">
      <img
        className="cards__image"
        alt={`Фотография: ${props.card.name}`}
        src={props.card.link}
        onClick={handleClick}
      />
      <button
        className="cards__delete-button"
        type="button"
        aria-label="Удалить карточку"></button>
      <div className="cards__element">
        <h2 className="cards__name">{props.card.name}</h2>
        <div className="cards__like-container">
          <button
            className="cards__like"
            type="button"
            aria-label="Нравится"></button>
          <p className="cards__like-counter">0</p>
        </div>
      </div>
    </article>
  );
}

export default Card;