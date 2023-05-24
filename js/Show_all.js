document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    pagination: {
      clickable: true,
      el: ".swiper-pagination",
    },
  });
});

function showMore() {
  var element1 = document.getElementById("element1");
  var element2 = document.getElementById("element2");
  var element3 = document.getElementById("element3");
  var text = document.getElementById("text");
  var showMoreButton = document.getElementById("showMoreButton");
  var image = document.getElementById("image");

  if (element1.style.display === "none") {
    element1.style.display = "flex";
    element2.style.display = "flex";
    element3.style.display = "flex";
    text.innerHTML = "Скрыть";
    image.src = "images/expand_up.webp";
  } else {
    element1.style.display = "none";
    element2.style.display = "none";
    element3.style.display = "none";
    text.innerHTML = "Показать всё";
    image.src = "images/expand.webp";
  }
}
