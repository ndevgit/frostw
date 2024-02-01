import swipertabs from "./modules/_swipertabs.js";
// import modal from "./modules/_modal.js";
import { disableScroll, enableScroll } from "./modules/_modal.js";
import mobile from "./modules/_mobile.js";
import formValidate from "./modules/_validate.js";
import scroll from "./modules/_scroll.js";

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
