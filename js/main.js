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
  /* Slider variables */
  const SLIDE_TIME = 6000;
  let currentSlide = 0;
  let interval;

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
    currentSlide = (currentSlide + 1) % slides.length;
    Array.from(slides).forEach((slide) => {
      slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
  }
  function handleSlideRight() {
    clearInterval(interval);
    slideRight();
    interval = setInterval(() => {
      slideRight();
    }, SLIDE_TIME);
  }

  /* Previous slide */
  function slideLeft() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    Array.from(slides).forEach((slide) => {
      slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
  }
  function handleSlideLeft() {
    clearInterval(interval);
    slideLeft();
    interval = setInterval(() => {
      slideRight();
    }, SLIDE_TIME);
  }

  // EVENT LISTENERS
  /* Open Navbar */
  btnNav.addEventListener("click", showNav);
  /* Close Navbar */
  btnClose.addEventListener("click", hideNav);
  /* Slide Right */
  slideRightBtn.addEventListener("click", handleSlideRight);
  /* Slide Left */
  slideLeftBtn.addEventListener("click", handleSlideLeft);
  /* Slide with keyboard */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Right" || e.key === "ArrowRight") {
      handleSlideRight();
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      handleSlideLeft();
    }
  });

  /* Initialize slider */
  interval = setInterval(() => {
    slideRight();
  }, SLIDE_TIME);
})();
