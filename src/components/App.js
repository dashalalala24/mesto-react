import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
    console.log(selectedCard)
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">

      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        name={'edit-profilepic'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        title={'Обновить аватар'}
        formName={'profilepic'}
        children={(
          <>
            <input
              className="popup__input popup__input_type_profilepic-link"
              id="profilepic-link-input"
              type="url"
              name="avatar"
              placeholder="Ссылка на фотографию"
              autoComplete="off"
              required />
            <span
              id="profilepic-link-input-error"
              className="popup__error profilepic-link-input-error"></span>
            <button
              className="popup__button"
              type="submit">Сохранить</button>
          </>
        )}
      />

      <PopupWithForm
        name={'edit-profile'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        title={'Редактировать профиль'}
        formName={'user'}
        children={(
          <>
            <input
              className="popup__input popup__input_type_username"
              id="username-input"
              type="text"
              name="name"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              autoComplete="off"
              required />
            <span
              id="username-input-error"
              className="popup__error username-input-error"></span>
            <input
              className="popup__input popup__input_type_occupation"
              id="occupation-input"
              type="text"
              name="about"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              autoComplete="off"
              required />
            <span
              id="occupation-input-error"
              className="popup__error occupation-input-error"></span>
            <button
              className="popup__button"
              type="submit">Сохранить</button>
          </>
        )}
      />

      <PopupWithForm
        name={'new-card'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        title={'Новое место'}
        formName={'card'}
        children={(
          <>
            <input
              className="popup__input popup__input_type_card-name"
              id="cardname-input"
              type="text"
              name="name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              autoComplete="off"
              required />
            <span
              id="cardname-input-error"
              className="popup__error cardname-input-error"></span>
            <input className="popup__input popup__input_type_card-link"
              id="link-input"
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              autoComplete="off"
              required />
            <span
              id="link-input-error"
              className="popup__error link-input-error"></span>
            <button
              className="popup__button"
              type="submit">Создать</button>
          </>
        )}
      />

      {/* <PopupWithForm
        name={'confirm-deletion'}
        isOpen={isConfirmDeletionPopupOpen}
        onClose={isPopupClosed}
        title={'Вы уверены?'}
        formName={'delete'}
        children={(
          <>
            <button className="popup__button" type="submit">Да</button>
          </>)}
      /> */}

      <PopupWithImage
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
  );
}

export default App;
