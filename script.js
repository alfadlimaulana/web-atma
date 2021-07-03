function navbarbg() {
  var nav = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    if (this.window.pageYOffset > 100) {
      nav.classList.add("navbar-bg", "shadow");
    } else {
      nav.classList.remove("navbar-bg", "shadow");
    }
  });
}

function navbarcollapse() {
  var button = document.querySelector(".navbar-toggler");

  if (this.window.pageYOffset <= 100) {
    button.addEventListener("click", function () {
      if (nav.classList.contains("navbar-bg")) {
        nav.classList.remove("navbar-bg", "shadow");
      } else {
        nav.classList.add("navbar-bg", "shadow");
      }
    });
  }
}
