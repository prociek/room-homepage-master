(function () {
  /* selecting elements */
  const btnNav = document.querySelector(".header__button--hamburger");
  const btnClose = document.querySelector(".header__button--close");
  const nav = document.querySelector(".header__nav");
  const overlay = document.querySelector(".overlay");
  const headerGroup = document.querySelector(".header__group");
  const slides = document.querySelectorAll(".carousel__item");
  const slideLeftBtn = document.querySelector(".carousel__button--left");
  const slideRightBtn = document.querySelector(".carousel__button--right");

  /* Index of current slide */
  let current = 0;

  /* Helper function */
  function toggleElement(el, show) {
    el.style.opacity = show ? "1" : "0";
    el.style.transform = show ? "translateY(0)" : "translateY(-100%)";
  }

  /* Show navbar */
  function showNav() {
    toggleElement(headerGroup, false);
    toggleElement(nav, true);
    overlay.style.display = "block";
  }

  /* Hide Navbar */
  function hideNav() {
    toggleElement(headerGroup, true);
    toggleElement(nav, false);
    overlay.style.display = "none";
  }

  /* Next slide */
  function slideRight() {
    current = (current + 1) % slides.length;
    Array.from(slides).forEach((slide) => {
      slide.style.transform = `translateX(-${current * 100}%)`;
    });
  }

  /* Previous slide */
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
