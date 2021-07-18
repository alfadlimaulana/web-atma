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

function navbarcollapse() {
  var button = document.querySelector(".navbar-toggler");
  var nav = document.querySelector("nav");

  button.addEventListener("click", function () {
    nav.classList.toggle("collapse-bg");
  });
}
