//Базовое открытие попапа
function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("mousedown", setOverlayListener);
  document.addEventListener("keydown", setEscListener);
}

// Открытие окна редактирования профиля
function openEditPopup() {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
}

// Открытие попапа фото карточки
function openPopupImg(card) {
  card.querySelector(".card__image").addEventListener("click", function (evt) {
    openPopup(popupFigure);
    const caption = evt.target
      .closest(".card")
      .querySelector(".card__title").textContent;
    popupFigureImage.alt = caption;
    popupFigureImage.src = evt.target.src;
    popupFigureCaption.textContent = caption;
  });
}

//закрытие попап базовое
function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
}

// Функция закрытия попап по оверлею
const setOverlayListener = function (evt) {
  const openedPopup = document.querySelector(".popup_is-opened");
  if (evt.target === openedPopup) {
    closePopup(openedPopup);
  }
};

// Функция закрытия попап по кнопке Escape
const setEscListener = function (evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    closePopup(openedPopup);
  }
};
