function scroll() {
  const toTopButton = document.querySelector(".to-top");
  const anchor = document.querySelector("#to-top");

  toTopButton.addEventListener("click", function (event) {
    event.preventDefault();

    function scroll() {
      window.scrollBy(0, -50);

      if (window.scrollY <= anchor.offsetTop) {
        clearInterval(interval);
      }
    }

    const interval = setInterval(scroll, 10);
  });
}

export default scroll;
