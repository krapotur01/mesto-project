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

const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name");
const profileText = profile.querySelector(".profile__text");
const popupButtonEdit = profile.querySelector(".profile__button_popup_edit");
const popupButtonAdd = profile.querySelector(".profile__button_popup_add");
const popupContainer = document.querySelector(".popup__container");
const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add");
const popupOpenImage = document.querySelector(".popup_open_image");
const popupCloseIconEdit = popupEdit.querySelector(".popup__close-icon");
const popupCloseIconAdd = popupAdd.querySelector(".popup__close-icon");
const popupCloseIconImage = popupOpenImage.querySelector(".popup__close-icon");
const formElementEdit = popupEdit.querySelector(".popup__form");
const formElementAdd = popupAdd.querySelector(".popup__form");
const nameInput = formElementEdit.querySelector("#name-input");
const jobInput = formElementEdit.querySelector("#job-input");
const galeryCards = document.querySelector(".galery__cards");
const cardTemplate = galeryCards.querySelector("#card__template").content;

initialCards.forEach(function (item) {
  createCard(item.name, item.link);
});

function createCard(name, link) {
  const cardItem = cardTemplate.querySelector(".card__item").cloneNode(true);
  const cardImage = cardItem.querySelector(".card__image");

  cardImage.src = link;
  cardImage.link = name;
  cardItem.querySelector(".card__heading").textContent = name;
  galeryCards.prepend(cardItem);

  const cardImages = cardItem.querySelectorAll(".card__image");
  cardImages.forEach(cardImage => cardImage.addEventListener("click", cardImageOpened));

  const cardLikeClick = evt => evt.target.classList.toggle("card__like_active");
  const cardLikes = cardItem.querySelectorAll(".card__like");
  cardLikes.forEach(cardLike => cardLike.addEventListener("click", cardLikeClick));

  const cardDeleteBtn = evt => {
    const cardItem = evt.target.closest(".card__item");
    cardItem.remove();
  }
  const cardTrashs = cardItem.querySelectorAll(".card__trash");
  cardTrashs.forEach(cardTrash => cardTrash.addEventListener("click", cardDeleteBtn));

  return cardItem;
}


function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function popupEditInfo() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
  openPopup(popupEdit);
}

function cardImageOpened(evt) {
  const cardItem = evt.target.closest(".card__item");
  const cardImage = cardItem.querySelector(".card__image");
  const cardHeading = cardItem.querySelector(".card__heading");
  const popupImage = popupContainer.querySelector(".popup__image");
  const popupImageTitle = popupContainer.querySelector(".popup__image_title");

  popupImage.src = cardImage.src;
  popupImage.alt = cardHeading.textContent;
  popupImageTitle.textContent = cardHeading.textContent;

  openPopup(popupOpenImage);
}

function formSubmitHandlerEdit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  closePopup(popupEdit);
}

function formSubmitHandlerAdd(evt) {
  evt.preventDefault();
  const imageLink = formElementAdd.querySelector("#image-link");
  const imageTitle = formElementAdd.querySelector("#image-title");
  createCard(imageTitle.value, imageLink.value);
  closePopup(popupAdd);
  formElementAdd.reset();
}

formElementEdit.addEventListener("submit", formSubmitHandlerEdit);
formElementAdd.addEventListener("submit", formSubmitHandlerAdd);

popupCloseIconImage.addEventListener("click", () => closePopup(popupOpenImage));
popupButtonEdit.addEventListener("click", popupEditInfo);
popupCloseIconEdit.addEventListener("click", () => closePopup(popupEdit));
popupButtonAdd.addEventListener("click", () => openPopup(popupAdd));
popupCloseIconAdd.addEventListener("click", () => {
  closePopup(popupAdd);
  formElementAdd.reset();
});
