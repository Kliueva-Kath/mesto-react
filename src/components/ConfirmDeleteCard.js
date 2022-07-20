import PopupWithForm from "./PopupWithForm.js";

// попап подтверждения удаления карточки

export default function ConfirmDeleteCard({
  isOpen,
  onClose,
  onCardDelete,
  card,
  isLoading,
}) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onCardDelete(card);
  }

  return (
    <PopupWithForm
      name="delete-card"
      title="Вы уверены?"
      buttonText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      loadingText="Удаление..."
    />
  );
}
