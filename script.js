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

function modal() {
  var container = document.querySelector(".grid-history");
  var modalImage = document.querySelector(".tmst");

  container.addEventListener("click", function (e) {
    console.log(e.target.className);
    if (e.target.classList.contains("logo2016")) {
      modalImage.src = "img/tmst2016.jpg";
    } else if (e.target.classList.contains("logo2018")) {
      modalImage.src = "img/tmst2018.jpeg";
    } else if (e.target.classList.contains("logo2019")) {
      modalImage.src = "img/tmst2019.jpg";
    } else if (e.target.classList.contains("logo2020")) {
      modalImage.src = "img/tmst2020.jpg";
    }
  });
}
