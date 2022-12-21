import React, { useState, useEffect } from 'react';
import api from "../utils/Api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userProfilePic, setUserProfilePic] = useState('');
  const [userName, setUserName] = useState('');
  const [userOccupation, setUserOccupation] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then((user) => {
        setUserProfilePic(user.avatar)
        setUserName(user.name);
        setUserOccupation(user.about);
      })
      .catch((error) => console.log(error));
  }, [])

  useEffect(() => {
    api.getInitialCards()
      .then((cards) => {
        setCards(cards)
      })
      .catch((error) => console.log(error));
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div
            className="profile__pic-container"
            onClick={onEditAvatar}>
            <img
              className="profile__pic"
              alt="Аватар"
              src={userProfilePic} />
          </div>
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__occupation">{userOccupation}</p>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="Редактировать профиль"
            onClick={onEditProfile}></button>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить фото"
          onClick={onAddPlace}></button>
      </section>

      <section className="cards" aria-label="Карточки с фотографиями">
        {cards.map((card, _id) => (
          <Card
            key={_id}
            card={card}
            onCardClick={onCardClick} />
        ))}
      </section>

    </main>
  )
};

export default Main;