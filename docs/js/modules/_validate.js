import { overlay, disableScroll, enableScroll, modal } from "./_modal.js";

function formValidate() {
  function validation(form) {
    function deleteError(input) {
      const label = input.parentNode;

      if (label.classList.contains("error-label")) {
        label.querySelector(".error-text").remove();
        label.classList.remove("error-label");
        input.classList.remove("invalid");
      }
    }

    function createError(input, text) {
      const label = input.parentNode;

      label.classList.add("error-label");

      const errorText = document.createElement("span");
      errorText.classList.add("error-text");
      errorText.textContent = text;

      input.classList.add("invalid");

      label.append(errorText);
    }

    let result = true;

    const formInputs = form.querySelectorAll("input");

    formInputs.forEach((formInputsElement) => {
      deleteError(formInputsElement);
      if (formInputsElement.value == "") {
        result = false;

        createError(formInputsElement, "Поле не заполнено");
      }
    });

    return result;
  }

  //Оповещение об отправке формы
  function createModal() {
    const modalSend = document.createElement("div");
    modalSend.className = "modal-send";

    const modalSendContent = document.createElement("div");
    modalSendContent.className = "modal-send-content";

    const modalSendText = document.createElement("h2");
    modalSendText.className = "modal-send-text";

    modalSendText.innerText = "Вы подписались";

    modalSendContent.append(modalSendText);
    modalSend.append(modalSendContent);
    overlay.prepend(modalSend);

    disableScroll();

    setTimeout(() => {
      modalSend.remove();
      overlay.classList.remove("overlay--visible");
      enableScroll();
    }, 1000);
  }

  const form = document.querySelectorAll(".form");
  form.forEach((formElement) => {
    formElement.addEventListener("submit", function (event) {
      event.preventDefault();

      if (validation(this) == true) {
        //Отображение оверлея
        overlay.classList.add("overlay--visible");

        //Скрываем модальное окно
        modal.classList.remove("modal--visible");

        //Оповещение об отправке формы
        createModal();
      }
    });
  });
}

export default formValidate;
