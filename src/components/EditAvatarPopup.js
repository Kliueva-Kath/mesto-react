import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm.js";

export default function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  isLoading,
}) {
  const avatarInputRef = useRef();

  useEffect(() => {
    avatarInputRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatarInputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="change-avatar"
      title="Обновить аватар"
      buttonText="Cохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <input
        type="url"
        className="form__input"
        id="avatar-url-input"
        name="avatarInput"
        placeholder="Ссылка на фото"
        ref={avatarInputRef}
        required
      />
      <span className="form__input-error avatar-url-input-error"></span>
    </PopupWithForm>
  );
}
