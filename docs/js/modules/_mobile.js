import { disableScroll, enableScroll, overlay, modal } from "./_modal.js";

// function mobile() {

//Элементы для переноса элементов при мобильном разрешении
//Элементы хедера
//Хедер контент верхний
const headerTopContent = document.querySelector(".header__top-content");
//Навигация
const headerNav = document.querySelector(".nav");
//Контакты
const headerContacts = document.querySelector(".header__contacts");
//Контакты телефон
const headerContactsCall = document.querySelector(".header__contacts-call");
//Контакты телефон ссылка
const callLink = document.querySelector(".call__link");
//Контакты почта
const headerContactsMail = document.querySelector(".header__contacts-mail");
//Контакты заказать звонок ссылка
const callLinkOrder = document.querySelector(".call__link-order");

//Хедер контент нижний
const headerBottomContent = document.querySelector(".header__bottom-content");
//Лого
const headerLogo = document.querySelector(".header__logo");
//Лого картинка
const headerLogoImage = document.querySelector(".header__logo-image");
//Каталог
const headerCatalogSearch = document.querySelector(".header__catalog-search");
//Кнопка в каталоге
const catalogButton = document.querySelector(".catalog__button");
//Бургер в кнопке каталога
const burger = document.querySelector(".burger");
//Форма поиска
const headerSearchForm = document.querySelector(".catalog__search-form");
//Кнопки управления
const headerControl = document.querySelector(".header__control");

//Элементы мобильного хедера
//Мобильный хедер
const headerMobile = document.querySelector(".header__mobile");
//Мобильная обертка для формы поиска
const mobileFormWrapper = document.querySelector(".mobile__form-wrapper");
//Мобильная обертка для контактов
const mobileContactsWrapper = document.querySelector(
  ".mobile__contacts-wrapper"
);
//Мобильная обертка для навигации
const mobileNavWrapper = document.querySelector(".mobile__nav-wrapper");
//Мобильная обертка для кнопок
const mobileButtonsWrapper = document.querySelector(".mobile__buttons-wrapper");

//Элементы обертки под карточки продуктов
const productCardsContent = document.querySelector(".product__cards-content");

//Элементы табов
const productTabsContent = document.querySelector(".product__tabs-content");
const productTabsLink = document.querySelector(".product__tabs-link");

//Флаги для проверки запуска функций
let moveElementsStarted = false;
let restoreElementsStarted = false;

//Создание элементов
const headerContactsMobile = document.createElement("div");
const mobileButtons = document.createElement("div");
mobileButtons.className = "mobile-buttons";

//Клонирование элементов
//Клонирование телефонов
const headerContactsCallMobile = headerContactsCall.cloneNode(true);
headerContactsCallMobile.className = "header__contacts-call-mobile";
headerContactsCallMobile.childNodes.forEach((childElement) => {
  childElement.className = "call__link-mobile";
});
//Клонирование первого телефона
const callLinkMobileButton = callLink.cloneNode(true);
callLinkMobileButton.className = "call__link-mobile-button";
//Клонирование почты
const headerContactsMailMobile = headerContactsMail.cloneNode(true);
headerContactsMailMobile.className = "header__contacts-mail-mobile";
headerContactsMailMobile.childNodes.forEach((childElement) => {
  childElement.className = "mail__link-mobile";
});

//Клонирование ссылки заказать звонок
const callLinkOrderMobile = callLinkOrder.cloneNode(true);
callLinkOrderMobile.className = "call__link-order-mobile";
callLinkOrderMobile.classList.add("call-link");

//Флаг для проверки скролла
let scrollDisabled = false;

//Перенос элементов
function moveElements() {
  if (!moveElementsStarted && window.innerWidth <= 992) {
    //Лого
    headerTopContent.prepend(headerLogo);
    headerLogoImage.src = "images/logo-mobile.svg";

    //Навигация
    mobileNavWrapper.append(headerNav);

    //Бургер + открытие мобильного меню
    headerCatalogSearch.prepend(burger);
    burger.classList.remove("burger");
    burger.classList.add("burger--mobile");
    burger.addEventListener("click", () => {
      burger.classList.toggle("burger--mobile-open");
      catalogButton.classList.toggle("catalog__button--padding");
      headerMobile.classList.toggle("header__mobile--visible");

      //Отключение скролла
      if (!scrollDisabled) {
        disableScroll();
        scrollDisabled = true;
      } else {
        enableScroll();
        scrollDisabled = false;
      }
    });

    //Форма поиска
    mobileFormWrapper.append(headerSearchForm);

    //Кнопки управления
    headerTopContent.append(headerControl);

    //Контакты
    headerContactsMobile.classList.add("header__contacts-mobile");
    headerContactsMobile.append(headerContactsCallMobile);
    headerContactsMobile.append(headerContactsMailMobile);
    mobileContactsWrapper.append(headerContactsMobile);

    //Нижняя часть мобильного меню
    mobileButtonsWrapper.append(mobileButtons);
    mobileButtons.prepend(callLinkMobileButton);
    mobileButtons.append(callLinkOrderMobile);
    //Открытие модального окна
    callLinkOrderMobile.addEventListener("click", () => {
      overlay.classList.add("overlay--visible");
      modal.classList.add("modal--visible");

      //Отключение скролла
      disableScroll();
    });

    //Ссылка в табах
    productCardsContent.append(productTabsLink);

    //Флаги для проверки запуска функций
    moveElementsStarted = true;
    restoreElementsStarted = false;
    // console.log("moveElementsStarted true");
  }
}

function restoreElements() {
  if (!restoreElementsStarted && window.innerWidth > 992) {
    //Лого
    headerBottomContent.prepend(headerLogo);
    headerLogoImage.src = "images/logo.png";

    //Навигация
    headerTopContent.prepend(headerNav);

    //Бургер
    catalogButton.prepend(burger);
    burger.classList.remove("burger--mobile");
    burger.classList.add("burger");
    burger.removeEventListener("click", () => {
      burger.classList.toggle("burger--mobile-open");
      catalogButton.classList.toggle("catalog__button--padding");
      headerMobile.classList.toggle("header__mobile--visible");
    });

    //Форма поиска
    headerCatalogSearch.append(headerSearchForm);

    //Кнопки управления
    headerBottomContent.append(headerControl);

    //Контакты
    headerContactsMobile.remove();
    mobileButtons.remove();

    //Ссылка в табах
    productTabsContent.append(productTabsLink);

    //Флаги для проверки запуска функций
    restoreElementsStarted = true;
    moveElementsStarted = false;
    // console.log("restoreElementsStarted true");
  }
}

window.addEventListener("resize", () => {
  moveElements();
  restoreElements();
});

// }

// export default mobile;

export { moveElements, restoreElements, callLinkOrderMobile };
