function navbarbg() {
  var nav = document.querySelector("nav");

  document.addEventListener("scroll", function () {
    if (this.window.pageYOffset > 10) {
      nav.classList.add("navbar-bg", "shadow");
    } else {
      nav.classList.remove("navbar-bg", "shadow");
    }
  });
}
