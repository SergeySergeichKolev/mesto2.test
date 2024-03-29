export const initialCards = [
  {
    name: "Свити Фокс",
    link: "https://sun6-22.userapi.com/impg/fkfARVKCembSv79qM7qOHB_Vw68GAfprgLboMw/9Q1MoZ948gg.jpg?size=604x404&quality=95&sign=8d40493e0f7fd9e4d75301039b8e1f4a&type=album",
  },
  {
    name: "Лухари Герл",
    link: "https://ayaznal.com/_bl/4/61845465.jpg",
  },
  {
    name: "Ева Эльфи",
    link: "https://tellygupshup.com/wp-content/uploads/2022/01/Eva-Elfie.jpg",
  },
  {
    name: "Джиа Лисса",
    link: "https://avatars.mds.yandex.net/i?id=a95b6725f71de3b8a926dfd6cdaec73e_l-5252128-images-thumbs&n=33&w=662&h=827&q=60",
  },
  {
    name: "Аня Тейлор",
    link: "https://avatars.mds.yandex.net/i?id=a9cf7a241b2f13f9c6b220b1a28a7500_l-5234007-images-thumbs&n=13",
  },
  {
    name: "Марго Робби",
    link: "https://avatars.mds.yandex.net/i?id=668f05882c021794843e60b8469d3ca1_l-5247241-images-thumbs&n=33&w=552&h=828&q=60",
  },
];

//создание карточки
export function createCard(
  link,
  name,
  deleteCard,
  handleLikeButton,
  openPopupImg
) {
  const card = template.querySelector(".card").cloneNode(true);
  card.querySelector(".card__image").src = link;
  card.querySelector(".card__image").alt = name;
  card.querySelector(".card__title").textContent = name;

  card
    .querySelector(".card__like-button")
    .addEventListener("click", function (evt) {
      handleLikeButton(evt);
    });

  deleteCard(card);
  openPopupImg(card);
  return card;
}

//Удаления карточек

export function deleteCard(card) {
  card
    .querySelector(".card__delete-button")
    .addEventListener("click", function (evt) {
      evt.target.closest(".card").remove();
    });
}

// Лайка на карточках
export function handleLikeButton(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}
