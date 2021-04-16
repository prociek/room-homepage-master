(function () {
  const btnNav = document.querySelector(".header__button--hamburger");
  const btnClose = document.querySelector(".header__button--close");
  const nav = document.querySelector(".header__nav");
  const headerGroup = document.querySelector(".header__group");
  const slides = document.querySelectorAll(".carousel__item");
  const slideLeftBtn = document.querySelector(".carousel__button--left");
  const slideRightBtn = document.querySelector(".carousel__button--right");

  let current = 0;

  function showNav() {
    headerGroup.style.opacity = "0";
    headerGroup.style.transform = "translateY(-100%)";
    nav.style.opacity = "1";
    nav.style.transform = "translateY(0)";
  }

  function hideNav() {
    nav.style.opacity = "0";
    nav.style.transform = "translateY(-100%)";
    headerGroup.style.opacity = "1";
    headerGroup.style.transform = "translateY(0)";
  }

  function slideRight() {
    current = (current + 1) % slides.length;
    Array.from(slides).forEach((slide) => {
      slide.style.transform = `translateX(-${current * 100}%)`;
    });
  }

  function slideLeft() {
    current = (current - 1 + slides.length) % slides.length;
    Array.from(slides).forEach((slide) => {
      slide.style.transform = `translateX(-${current * 100}%)`;
    });
  }

  // Event listeners
  btnNav.addEventListener("click", showNav);
  btnClose.addEventListener("click", hideNav);
  slideRightBtn.addEventListener("click", slideRight);
  slideLeftBtn.addEventListener("click", slideLeft);
})();
