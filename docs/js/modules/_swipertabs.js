function swipertabs() {
  //Swiper 1
  const swiper1 = new Swiper(".swiper1", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    slidesPerView: "1",
    spaceBetween: 24,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });

  //Swiper 2
  const swiper2 = new Swiper(".swiper2", {
    // Optional parameters
    direction: "horizontal",
    loop: false,

    slidesPerView: "auto",
    spaceBetween: 32,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //Элементы для табов
  const tabsButtons = document.querySelectorAll("[data-tab]");
  const tabsProducts = document.querySelectorAll("[data-tab-value]");

  //Табы
  for (const button of tabsButtons) {
    button.addEventListener("click", function () {
      //Убрать активный класс у всех кнопок
      for (const button of tabsButtons) {
        button.classList.remove("product__tabs-button--active");
      }

      //Добавить активный класс к кнопке
      button.classList.add("product__tabs-button--active");

      //Скрыть/отобразить все товары
      for (const product of tabsProducts) {
        if (product.dataset.tabValue === button.dataset.tab) {
          product.classList.remove("product__card--none");
        } else {
          product.classList.add("product__card--none");
        }
      }

      swiper2.update();
    });
  }
}

export default swipertabs;
