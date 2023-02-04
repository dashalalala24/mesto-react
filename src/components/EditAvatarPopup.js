import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef(null);

  useEffect(() => {
    avatarRef.current.value = null;
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="edit-profilepic"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Обновить аватар"
      formName="profilepic"
      buttonText="Сохранить"
      children={
        <>
          <input
            className="popup__input popup__input_type_profilepic-link"
            id="profilepic-link-input"
            type="url"
            name="avatar"
            placeholder="Ссылка на фотографию"
            autoComplete="off"
            required
            ref={avatarRef}
          />
          <span
            id="profilepic-link-input-error"
            className="popup__error profilepic-link-input-error"
          ></span>
        </>
      }
    />
  );
}

export default EditAvatarPopup;
