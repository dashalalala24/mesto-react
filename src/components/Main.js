import React from "react"
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userProfilePic, setuserProfilePic] = React.useState('');
  const [userName, setuserName] = React.useState('');
  const [userOccupation, setuserOccupation] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((user) => {
        setuserProfilePic(user.avatar)
        setuserName(user.name);
        setuserOccupation(user.about);
      })
      .catch((error) => console.log(error));
  }, [])

  React.useEffect(() => {
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
            onClick={props.onEditAvatar}>
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
            onClick={props.onEditProfile}></button>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить фото"
          onClick={props.onAddPlace}></button>
      </section>

      <section className="cards" aria-label="Карточки с фотографиями">
        {cards.map((card, i) => (
          <Card
            key={i}
            card={card}
            onCardClick={props.onCardClick} />
        ))}
      </section>

    </main>
  )
};

export default Main;