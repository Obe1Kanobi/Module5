new Swiper(".brands__section--cont");

var brands__sum = document.getElementById("brands__sum");
var showMoreButton = document.getElementById("showMoreButton");
var itemsToShow = 3;
var hiddenItems = [];

showMoreButton.addEventListener("click", function () {
  if (hiddenItems.length === 0) {
    // Показываем дополнительные скрытые контейнеры
    for (var i = itemsToShow; i < container.children.length; i++) {
      container.children[i].classList.remove("hidden");
      hiddenItems.push(container.children[i]);
    }
    showMoreButton.textContent = "Скрыть";
  } else {
    // Скрываем дополнительные контейнеры
    for (var j = hiddenItems.length - 1; j >= 0; j--) {
      hiddenItems[j].classList.add("hidden");
    }
    hiddenItems = [];
    showMoreButton.textContent = "Показать все";
  }
});

// Инициализируем скрытие дополнительных контейнеров
for (var k = itemsToShow; k < container.children.length; k++) {
  container.children[k].classList.add("hidden");
}
