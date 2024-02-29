(() => {
  "use strict";
  function e(e) {
    e.querySelector(".card__delete-button").addEventListener(
      "click",
      function (e) {
        e.target.closest(".card").remove();
      }
    );
  }
  function t(e) {
    e.target.classList.toggle("card__like-button_is-active");
  }
  function n(e) {
    e.classList.add("popup_is-opened"),
      document.addEventListener("mousedown", c),
      document.addEventListener("keydown", u);
  }
  function o(e) {
    e.querySelector(".card__image").addEventListener("click", function (e) {
      n(popupFigure);
      var t = e.target
        .closest(".card")
        .querySelector(".card__title").textContent;
      (popupFigureImage.alt = t),
        (popupFigureImage.src = e.target.src),
        (popupFigureCaption.textContent = t);
    });
  }
  function r(e) {
    e.classList.remove("popup_is-opened");
  }
  var c = function (e) {
      var t = document.querySelector(".popup_is-opened");
      e.target === t && r(t);
    },
    u = function (e) {
      "Escape" === e.key && r(document.querySelector(".popup_is-opened"));
    },
    p = document.querySelector(".profile__edit-button"),
    i = document.querySelector("#edit-profile-close"),
    a = document.querySelector(".popup__input_type_name"),
    l = document.querySelector(".popup__input_type_description"),
    d = document.querySelector(".profile__title"),
    s = document.querySelector(".profile__description"),
    _ = document.querySelector(".profile__add-button"),
    m = document.querySelector(".popup__input_type_card-name"),
    y = document.querySelector(".popup__input_type_url"),
    f = document.querySelector(".places").querySelector(".places__list"),
    q = document.querySelector("#form-card"),
    S = document.querySelector(".popup_type_edit"),
    v = S.querySelector("#form-profile"),
    g = document.querySelector(".popup_type_new-card"),
    b = g.querySelector(".popup__close"),
    k = document.querySelector(".popup_type_image"),
    E =
      (g.querySelector(".popup__button"),
      k.querySelector(".popup__image"),
      k.querySelector(".popup__caption"),
      k.querySelector(".popup__close"));
  function L(e, t, n, o, r) {
    f.prepend(
      (function (e, t, n, o, r) {
        var c = template.querySelector(".card").cloneNode(!0);
        return (
          (c.querySelector(".card__image").src = e),
          (c.querySelector(".card__image").alt = t),
          (c.querySelector(".card__title").textContent = t),
          c
            .querySelector(".card__like-button")
            .addEventListener("click", function (e) {
              o(e);
            }),
          n(c),
          r(c),
          c
        );
      })(e, t, n, o, r)
    );
  }
  document
    .querySelector("#card-template")
    .content.querySelector(".card")
    .cloneNode(!0),
    [
      {
        name: "Свити Фокс",
        link: "https://sun6-22.userapi.com/impg/fkfARVKCembSv79qM7qOHB_Vw68GAfprgLboMw/9Q1MoZ948gg.jpg?size=604x404&quality=95&sign=8d40493e0f7fd9e4d75301039b8e1f4a&type=album",
      },
      { name: "Лухари Герл", link: "https://ayaznal.com/_bl/4/61845465.jpg" },
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
    ].forEach(function (n) {
      L(n.link, n.name, e, t, o);
    }),
    v.addEventListener("submit", function (e) {
      e.preventDefault(),
        (d.textContent = a.value),
        (s.textContent = l.value),
        r(S);
    }),
    p.addEventListener("click", function () {
      n(popupEditProfile),
        (nameInput.value = profileName.textContent),
        (jobInput.value = profileText.textContent);
    }),
    i.addEventListener("click", function () {
      r(S);
    }),
    _.addEventListener("click", function () {
      n(g);
    }),
    b.addEventListener("click", function () {
      r(g);
    }),
    q.addEventListener("submit", function (e) {
      e.preventDefault(), L(y.value, m.value), q.reset(), r(g);
    }),
    E.addEventListener("click", function () {
      r(k);
    });
})();
