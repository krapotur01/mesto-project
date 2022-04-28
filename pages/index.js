const popupButtonEdit = document.querySelector(".profile__button_popup_edit");
const popupButtonAdd = document.querySelector(".profile__button_popup_add");
const popupEdit = document.querySelector("#popup_edit");
const popupAdd = document.querySelector("#popup_add");
const popupCloseIconEdit = popupEdit.querySelector(".popup__close-icon");
const popupCloseIconAdd = popupAdd.querySelector(".popup__close-icon");
const formElementEdit = popupEdit.querySelector(".popup__form");
const formElementAdd = popupAdd.querySelector(".popup__form");
const nameInput = formElementEdit.querySelector(".popup__input_text_name");
const jobInput = formElementEdit.querySelector(".popup__input_text_info");
const profileName = document.querySelector(".profile__name");
const profileText = document.querySelector(".profile__text");
const galeryCards = document.querySelector(".galery__cards");
const cardTemplate = document.querySelector("#card__template").content;

popupButtonEdit.addEventListener("click", popupAddClassButtonEdit);
popupButtonAdd.addEventListener("click", popupAddClassButtonAdd);
popupCloseIconEdit.addEventListener("click", popupAddClassButtonEdit);
popupCloseIconAdd.addEventListener("click", popupAddClassButtonAdd);

formElementEdit.addEventListener("submit", formSubmitHandlerEdit);
formElementAdd.addEventListener("submit", formSubmitHandlerAdd);

function popupAddClassButtonEdit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
  popupEdit.classList.toggle("popup_opened");
}

function popupAddClassButtonAdd() {
  popupAdd.classList.toggle("popup_opened");
}

function formSubmitHandlerEdit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  popupAddClassButtonEdit();
}

function formSubmitHandlerAdd(evt) {
  evt.preventDefault();

  

  popupAddClassButtonAdd();
}

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

initialCards.forEach(function (item) {
  const cardItem = cardTemplate.querySelector(".card__item").cloneNode(true);

  cardItem.querySelector(".card__image").src = item.link;
  cardItem.querySelector(".card__image").alt = item.name;
  cardItem.querySelector(".card__heading").textContent = item.name;

  galeryCards.prepend(cardItem);
});

const cardLikes = document.querySelectorAll(".card__like");

function cardLikeClick(evt) {
  evt.target.classList.toggle("card__like_active");
}

cardLikes.forEach(function (cardLike) {
  cardLike.addEventListener("click", cardLikeClick);
});
