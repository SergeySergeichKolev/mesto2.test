(() => {
  var e = document.querySelector(".profile__edit-button"),
    t = document.querySelector("#edit-profile-close"),
    o = document.querySelector(".popup__input_type_name"),
    u = document.querySelector(".popup__input_type_description"),
    p = document.querySelector(".profile__title"),
    r = document.querySelector(".profile__description"),
    c = document.querySelector(".profile__add-button"),
    n = document.querySelector(".popup__input_type_card-name"),
    l = document.querySelector(".popup__input_type_url"),
    i = document.querySelector(".places").querySelector(".places__list"),
    d = document.querySelector("#form-card"),
    _ = document.querySelector(".popup_type_edit"),
    a = _.querySelector("#form-profile"),
    y = document.querySelector(".popup_type_new-card"),
    m = y.querySelector(".popup__close"),
    s = document.querySelector(".popup_type_image"),
    q =
      (y.querySelector(".popup__button"),
      s.querySelector(".popup__image"),
      s.querySelector(".popup__caption"),
      s.querySelector(".popup__close"));
  function S(e, t, o, u, p) {
    i.prepend(createCard(e, t, o, u, p));
  }
  document
    .querySelector("#card-template")
    .content.querySelector(".card")
    .cloneNode(!0),
    initialCards.forEach(function (e) {
      S(e.link, e.name, deleteCard, handleLikeButton, openPopupImg);
    }),
    a.addEventListener("submit", function (e) {
      e.preventDefault(),
        (p.textContent = o.value),
        (r.textContent = u.value),
        closePopup(_);
    }),
    e.addEventListener("click", openEditPopup),
    t.addEventListener("click", function () {
      closePopup(_);
    }),
    c.addEventListener("click", function () {
      openPopup(y);
    }),
    m.addEventListener("click", function () {
      closePopup(y);
    }),
    d.addEventListener("submit", function (e) {
      e.preventDefault(), S(l.value, n.value), d.reset(), closePopup(y);
    }),
    q.addEventListener("click", function () {
      closePopup(s);
    });
})();
