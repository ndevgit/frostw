import { disableScroll, enableScroll, overlay } from "./_modal.js";

function mobile() {
  //Элементы для переноса элементов при мобильном разрешении

  //Элементы хедера
  //Хедер контент верхний
  const headerTopContent = document.querySelector(".header__top-content");
  //Навигация
  const headerNav = document.querySelector(".nav");
  //Контакты
  const headerContacts = document.querySelector(".header__contacts");

  //Хедер контент нижний
  const headerBottomContent = document.querySelector(".header__bottom-content");
  //Лого
  const headerLogo = document.querySelector(".header__logo");
  //Лого картинка
  const headerLogoImage = document.querySelector(".header__logo-image");
  //Каталог
  const headerSearch = document.querySelector(".header__catalog-search");
  //Форма поиска
  const headerSearchForm = document.querySelector(".catalog__search-form");
  //Кнопки управления
  const headerControl = document.querySelector(".header__control");

  //Элементы мобильного хедера
  //Мобильная обертка для формы поиска
  const mobileFormWrapper = document.querySelector(".mobile__form-wrapper");
  //Мобильная обертка для контактов
  const mobileContactsWrapper = document.querySelector(
    ".mobile__contacts-wrapper"
  );
  //Мобильная обертка для навигации
  const mobileNavWrapper = document.querySelector(".mobile__nav-wrapper");
  //Мобильная обертка для кнопок
  const mobileButtonsWrapper = document.querySelector(
    ".mobile__buttons-wrapper"
  );

  //Элементы обертки под карточки продуктов
  const productCardsContent = document.querySelector(".product__cards-content");

  //Элементы табов
  const productTabsContent = document.querySelector(".product__tabs-content");
  const productTabsLink = document.querySelector(".product__tabs-link");

  //Перенос элементов
  function moveElements() {
    //Элементы для мобильного меню
    const headerMobile = document.querySelector(".header__mobile");
    const headerCatalogSearch = document.querySelector(
      ".header__catalog-search"
    );
    const catalogButton = document.querySelector(".catalog__button");
    const burger = document.querySelector(".burger");

    //Открытие мобильного меню
    //Копирование и перенос бургера из кнопки каталога
    let isScrollDisabled = false;

    const burgerMobile = burger.cloneNode(true);
    burgerMobile.className = "burger--mobile";
    headerCatalogSearch.prepend(burgerMobile);

    burgerMobile.addEventListener("click", () => {
      headerMobile.classList.toggle("header__mobile--visible");
      burgerMobile.classList.toggle("burger--mobile-open");
      catalogButton.classList.toggle("catalog__button--padding");

      if (!isScrollDisabled) {
        disableScroll();
        isScrollDisabled = true;
      } else {
        enableScroll();
        isScrollDisabled = false;
      }
    });

    //Лого
    headerTopContent.prepend(headerLogo);
    headerLogoImage.src = "images/logo-mobile.svg";

    //Навигация
    mobileNavWrapper.append(headerNav);

    //Контакты
    const mobileContacts = headerTopContent
      .querySelector(".header__contacts")
      .cloneNode(true);

    mobileContacts.className = "header__contacts-mobile";
    mobileContactsWrapper.append(mobileContacts);

    //Контакты телефон
    const mobileContactsCall = mobileContacts.querySelector(
      ".header__contacts-call"
    );
    mobileContactsCall.className = "header__contacts-call-mobile";

    //Контакты телефон ссылки
    const callLinkMobile = mobileContactsCall.querySelectorAll(".call__link");
    callLinkMobile.forEach((callLinkMobileElement) => {
      callLinkMobileElement.className = "call__link-mobile";
    });

    //Контакты почта
    const mobileContactsMail = mobileContacts.querySelector(
      ".header__contacts-mail"
    );
    mobileContactsMail.className = "header__contacts-mail-mobile";

    //Контакты почта ссылки
    const mailLinkMobile = mobileContactsMail.querySelector(".mail__link");
    mailLinkMobile.className = "mail__link-mobile";

    //Делаем копию ссылки из контактов телефон ссылки
    const callLinkMobileButton = callLinkMobile[0].cloneNode(true);
    callLinkMobileButton.className = "call__link-mobile-button";

    mobileButtonsWrapper.prepend(callLinkMobileButton);

    //Контакты заказать звонок ссылка
    const callLinkOrderMobile =
      mobileContacts.querySelector(".call__link-order");
    callLinkOrderMobile.className = "call__link-order-mobile";

    mobileButtonsWrapper.append(callLinkOrderMobile);

    //Открытие модального окна по кнопке заказать звонок
    callLinkOrderMobile.addEventListener("click", () => {
      overlay.classList.add("overlay--visible");

      disableScroll();
    });

    //Форма поиска
    mobileFormWrapper.append(headerSearchForm);

    //Кнопки управления
    headerTopContent.append(headerControl);

    //Ссылка в табах
    productCardsContent.append(productTabsLink);
  }

  function restoreElements() {
    //Лого
    headerBottomContent.prepend(headerLogo);
    headerLogoImage.src = "images/logo.png";

    //Навигация
    headerTopContent.prepend(headerNav);

    //Контакты
    headerTopContent.append(headerContacts);

    //Форма поиска
    headerSearch.append(headerSearchForm);

    //Кнопки управления
    headerBottomContent.append(headerControl);

    //Ссылка в табах
    productTabsContent.append(productTabsLink);
  }

  // Отслеживание изменения размера страницы
  // window.addEventListener("load");

  // window.addEventListener("resize");

  if (window.innerWidth <= 992) {
    moveElements();
  }

  if (window.innerWidth > 992) {
    restoreElements();
  }
}
export default mobile;
