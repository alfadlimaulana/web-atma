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
