document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    direction: "horizontal",
    loop: false,
    pagination: {
      clickable: true,
      el: ".swiper-pagination",
    },
  });
});

function showMore() {
  let button = document.querySelector(".button");
  let container = document.querySelector(".container");
  let buttontext = document.querySelector(".buttontext");
  let buttonimg = document.querySelector(".buttonimg");

  if (buttontext.innerHTML === "Скрыть") {
    container.style.display = "none";
    buttontext.innerHTML = "Показать всё";
    buttonimg.src = "images/expand.webp";
  } else {
    container.style.display = "grid";
    buttontext.innerHTML = "Скрыть";
    buttonimg.src = "images/expand_up.webp";
  }
}

// найти способ как посмотреть текст в кнопке, если у меня в кнопке текст "Показать всё", то показываем контейнер
