function navbarbg() {
  var nav = document.querySelector("nav");

  document.addEventListener("scroll", function () {
    if (window.pageYOffset > 10) {
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
  var modalImage = document.querySelector(".border-grad img");
  var date = document.querySelector(".list-unstyled li:nth-child(1)");
  var venue = document.querySelector(".list-unstyled li:nth-child(2)");
  var theme = document.querySelector(".list-unstyled li:nth-child(3)");

  container.addEventListener("click", function (e) {
    console.log(e.target.className);
    if (e.target.classList.contains("logo2016")) {
      modalImage.src = "img/tmst2016.jpg";
      date.innerHTML = "<strong>Date :</strong> January 9, 2016";
      venue.innerHTML = "<strong>Venue :</strong> Sasana Budaya Ganesha, Bandung";
      theme.innerHTML = "<strong>Theme :</strong> Bandung";
    } else if (e.target.classList.contains("logo2018")) {
      modalImage.src = "img/tmst2018.jpeg";
      date.innerHTML = "<strong>Date :</strong> September 29, 2018";
      venue.innerHTML = "<strong>Venue :</strong> Lapangan Pussenif, Bandung";
      theme.innerHTML = "<strong>Theme :</strong> HIFESTUS";
    } else if (e.target.classList.contains("logo2019")) {
      modalImage.src = "img/tmst2019.jpg";
      date.innerHTML = "<strong>Date :</strong> October 12, 2019";
      venue.innerHTML = "<strong>Venue :</strong> Lapangan Pussenif, Bandung";
      theme.innerHTML = "<strong>Theme :</strong> RATETRA";
    } else if (e.target.classList.contains("logo2020")) {
      modalImage.src = "img/tmst2020.jpg";
      date.innerHTML = "<strong>Date :</strong> November 20, 2020";
      venue.innerHTML = "<strong>Venue :</strong> Virtual Concert";
      theme.innerHTML = "<strong>Theme :</strong> RHEMURA";
    }
  });
}
