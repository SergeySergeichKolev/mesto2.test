import "../pages/index.css"; // добавьте импорт главного файла стилей
import {
  initialCards,
  deleteCard,
  createCard,
  handleLikeButton,
} from "./cards";
import {
  openPopup,
  openEditPopup,
  openPopupImg,
  closePopup,
  setOverlayListener,
  setEscListener,
} from "./modal";

const popupEditButton = document.querySelector(".profile__edit-button"); //кнопка открытия попапа изменения профиля
const popupEditCloseButton = document.querySelector("#edit-profile-close"); //кнопка закрытия попапа редактирования профиля
const nameInput = document.querySelector(".popup__input_type_name"); // input имени чувака в попапе редактирования
const jobInput = document.querySelector(".popup__input_type_description"); // input описания чувака в попапе редактирования
const profileName = document.querySelector(".profile__title"); //само имя аккуанта на сайте
const profileText = document.querySelector(".profile__description"); //описание имени на сайте

const popupAddCardButton = document.querySelector(".profile__add-button"); //добавить пост кнопка
const inputAddCardName = document.querySelector(".popup__input_type_card-name"); //инпут название поста
const inputAddCardLink = document.querySelector(".popup__input_type_url"); //инпут ссылка на картинку для поста

const cardsContainer = document.querySelector(".places"); //оболочка для списка карточек
const cardsList = cardsContainer.querySelector(".places__list"); //ul список для карточек
const popupFormCard = document.querySelector("#form-card"); //форма новая карта добавление

const popupEditProfile = document.querySelector(".popup_type_edit"); //весь попап редактирвания
const popupFormProfile = popupEditProfile.querySelector("#form-profile"); //форма редактирования профиля
const popupAddCard = document.querySelector(".popup_type_new-card"); //весь попап добавления карточки
const popupAddCardCloseButton = popupAddCard.querySelector(".popup__close"); //кнопка закрытия попапа добавления
const popupFigure = document.querySelector(".popup_type_image"); //для картинки
const addCardButtonSave = popupAddCard.querySelector(".popup__button"); //сохранение добавления карточки

const popupFigureImage = popupFigure.querySelector(".popup__image");
const popupFigureCaption = popupFigure.querySelector(".popup__caption");
const imageCloseButton = popupFigure.querySelector(".popup__close");

const template = document.querySelector("#card-template").content;
const card = template.querySelector(".card").cloneNode(true);

//Добавления карточек при загрузке страницы
initialCards.forEach(function (item) {
  renderCard(item.link, item.name, deleteCard, handleLikeButton, openPopupImg);
});

function renderCard(link, name, deleteCard, handleLikeButton, openPopupImg) {
  cardsList.prepend(
    createCard(link, name, deleteCard, handleLikeButton, openPopupImg)
  );
}

// Добавления карточек через инпут попапа
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  renderCard(inputAddCardLink.value, inputAddCardName.value);
  popupFormCard.reset();
  closePopup(popupAddCard);
  //addCardButtonSave.disabled = true;
}

// Изменение данных профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function closeAddCardPopup() {
  closePopup(popupAddCard);
}

//слушатель отправки формы редактирования профиля
popupFormProfile.addEventListener("submit", handleProfileFormSubmit);

//слушатель кнопки открытия попапа редактирования профиля
popupEditButton.addEventListener("click", openEditPopup);

//кнопка закрытия попапа редактирования профиля
popupEditCloseButton.addEventListener("click", () => {
  closePopup(popupEditProfile);
});

//Слушатель кнопки открытия попапа для добавления карточки
popupAddCardButton.addEventListener("click", () => {
  openPopup(popupAddCard);
});

//Слушатель кнопки закрытия попапа добавления карточки
popupAddCardCloseButton.addEventListener("click", closeAddCardPopup);

//слушатель отправки формы добавления карточки из попапа
popupFormCard.addEventListener("submit", handleCardFormSubmit);

//слушатель кнопки закрытия попапа с фото
imageCloseButton.addEventListener("click", () => {
  closePopup(popupFigure);
});
