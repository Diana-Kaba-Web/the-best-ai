document.addEventListener("DOMContentLoaded", function () {
  let arrowUp = document.querySelector(".arrow-up");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      arrowUp.classList.add("show-arrow");
    } else {
      arrowUp.classList.remove("show-arrow");
    }
  });

  arrowUp.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});