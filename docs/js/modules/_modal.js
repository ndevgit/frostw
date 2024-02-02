//Элементы для модального окна
//Оверлей
const overlay = document.querySelector(".overlay");
//Модальное окно
const modal = document.querySelector(".modal");

//Ссылки-кнопки
const callLinkOrder = document.querySelector(".call__link-order");
const callLinkOrderFooter = document.querySelector(".call__link-order-footer");
const callOrder = document.querySelectorAll(".call-order");

//Кнопка закрытия
const modalButtonClose = document.querySelector(".modal__button-close");

//Открытие модального окна
callOrder.forEach((callOrderElement) => {
  callOrderElement.addEventListener("click", () => {
    overlay.classList.add("overlay--visible");
    modal.classList.add("modal--visible");

    //Отключение скролла
    disableScroll();
  });
});

//Отключение скролла и прыжка контента при открытии модального окна или мобильного меню
const fixJump = document.querySelectorAll(".fix-jump");

function disableScroll() {
  const paddingOffset = window.innerWidth - document.body.offsetWidth + "px";

  document.body.classList.add("body--overflow-hidden");

  fixJump.forEach((fixJumpElement) => {
    fixJumpElement.style.paddingRight = paddingOffset;
  });

  document.body.style.paddingRight = paddingOffset;
}

//Включение скролла и прыжка контента при открытии модального окна или мобильного меню
function enableScroll() {
  document.body.classList.remove("body--overflow-hidden");

  fixJump.forEach((fixJumpElement) => {
    fixJumpElement.style.paddingRight = "0px";
  });

  document.body.style.paddingRight = "0px";
}

//Закрытие модального окна
modalButtonClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--visible");
  modal.classList.remove("modal--visible");

  //Включение скролла
  enableScroll();
});

//Закрытие модального окна откликиванием мыши
overlay.addEventListener("click", function (event) {
  if (event.target == overlay) {
    overlay.classList.remove("overlay--visible");
    modal.classList.remove("modal--visible");
    enableScroll();
  }
});

export { disableScroll, enableScroll, overlay, modal, modalButtonClose };
