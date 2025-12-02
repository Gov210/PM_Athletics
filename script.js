const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".main-header");

// Preserve page scroll position when opening the mobile nav.
let savedScrollY = 0;

btnNavEl.addEventListener("click", function () {
  const isOpen = headerEl.classList.toggle("nav-open");

  if (isOpen) {
    // open: save scroll position and lock the body (prevent jumping)
    savedScrollY = window.scrollY || window.pageYOffset || 0;
    document.body.classList.add("nav-open");
    document.body.style.position = "fixed";
    document.body.style.top = `-${savedScrollY}px`;
    document.body.style.width = "100%";
  } else {
    // close: remove lock and restore scroll position
    headerEl.classList.remove("nav-open");
    document.body.classList.remove("nav-open");
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, savedScrollY);
  }
});
