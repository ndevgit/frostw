import swipertabs from "_swipertabs.js";
// import modal from "./modules/_modal.js";
import { disableScroll, enableScroll } from "_modal.js";
import mobile from "_mobile.js";
import formValidate from "_validate.js";
import scroll from "_scroll.js";

window.addEventListener("DOMContentLoaded", () => {
  //Свайпер
  swipertabs();

  //Модальное окно
  // modal();
  disableScroll();
  enableScroll();

  //Мобильная версия
  mobile();

  //Элементы для валидации формы

  //Валидация формы
  formValidate();

  //Скролл
  scroll();

  const catalogButton = document.querySelector(".catalog__button");
  catalogButton.addEventListener("click", () => {
    catalogButton.classList.toggle("catalog__button--open");
  });
});
