import React from "react";

function PopupWithImage(props) {
  return (
    <div className={`popup popup_type_full-image ${props.card ? "popup_opened" : ''}`}>
      <div className="popup__container popup__container_type_full-image">
        <button
          className="popup__close-icon"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}></button>
        <figure className="popup__figure">
          <img className="popup__image"
            alt='Фотография'
            src={props.card?.link} />
          <figcaption className="popup__caption">{props.card?.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default PopupWithImage;