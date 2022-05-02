const popupButtonEdit = document.querySelector(".profile__button_popup_edit");
const popupButtonAdd = document.querySelector(".profile__button_popup_add");
const popupEdit = document.querySelector("#popup_edit");
const popupAdd = document.querySelector("#popup_add");
const popupOpenImage = document.querySelector(".popup_open_image");
const popupCloseIconEdit = popupEdit.querySelector(".popup__close-icon");
const popupCloseIconAdd = popupAdd.querySelector(".popup__close-icon");
const popupCloseIconImage = popupOpenImage.querySelector(".popup__close-icon");
const formElementEdit = popupEdit.querySelector(".popup__form");
const formElementAdd = popupAdd.querySelector(".popup__form");
const nameInput = formElementEdit.querySelector("#name-input");
const jobInput = formElementEdit.querySelector("#job-input");
const profileName = document.querySelector(".profile__name");
const profileText = document.querySelector(".profile__text");
const galeryCards = document.querySelector(".galery__cards");
const cardTemplate = document.querySelector("#card__template").content;

popupButtonEdit.addEventListener("click", popupAddClassButtonEdit);
popupButtonAdd.addEventListener("click", popupAddClassButtonAdd);
popupCloseIconEdit.addEventListener("click", popupAddClassButtonEdit);
popupCloseIconAdd.addEventListener("click", popupAddClassButtonAdd);
popupCloseIconImage.addEventListener("click", popupAddClassButtonImage);

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

function popupAddClassButtonImage() {
  popupOpenImage.classList.toggle("popup_opened");
}

function formSubmitHandlerEdit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  popupAddClassButtonEdit();
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

function formSubmitHandlerAdd(evt) {
  evt.preventDefault();
  const imageLink = document.querySelector("#image-link");
  const imageTitle = document.querySelector("#image-title");
  const cardItem = cardTemplate.querySelector(".card__item").cloneNode(true);

  cardItem.querySelector(".card__image").src = imageLink.value;
  cardItem.querySelector(".card__image").alt = imageTitle.value;
  cardItem.querySelector(".card__heading").textContent = imageTitle.value;

  galeryCards.prepend(cardItem);

  cardItem
    .querySelector(".card__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__like_active");
    });

  const cardTrash = document.querySelector(".card__trash");
  cardTrash.addEventListener("click", function () {
    const cardDelete = cardTrash.closest(".card__item");
    cardDelete.remove();
  });

  popupAddClassButtonAdd();
  formElementAdd.reset();
}

const cardLikes = document.querySelectorAll(".card__like");

function cardLikeClick(evt) {
  evt.target.classList.toggle("card__like_active");
}

cardLikes.forEach(function (cardLike) {
  cardLike.addEventListener("click", cardLikeClick);
});

const cardTrashs = document.querySelectorAll(".card__trash");

function cardDeleteBtn(evt) {
  const cardItem = evt.target.closest(".card__item");
  cardItem.remove();
}

cardTrashs.forEach(function (cardTrash) {
  cardTrash.addEventListener("click", cardDeleteBtn);
});

const cardImages = document.querySelectorAll(".card__image");

function cardImageOpened(evt) {
  const cardItem = evt.target.closest('.card__item');
  const cardImage = cardItem.querySelector(".card__image");
  const cardHeading = cardItem.querySelector(".card__heading");

  const popupContainer = document.querySelector('.popup__container');
  const popupImage = popupContainer.querySelector(".popup__image");
  const popupImageTitle = popupContainer.querySelector(".popup__image_title");

  popupImage.src = cardImage.src;
  popupImageTitle.textContent = cardHeading.textContent;

  popupAddClassButtonImage();
}


cardImages.forEach(function (cardImage) {
  cardImage.addEventListener("click", cardImageOpened);
});
