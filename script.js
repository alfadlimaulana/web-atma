function navbarbg() {
  var nav = document.querySelector("nav");
  var navLogo = document.querySelector(".nav-logo");

  document.addEventListener("scroll", function () {
    if (window.pageYOffset > 10) {
      nav.classList.add("navbar-bg", "shadow");
      navLogo.src = "img/stiker-coklat.svg";
    } else {
      nav.classList.remove("navbar-bg", "shadow");
      navLogo.src = "img/logo.svg";
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
  var text = document.querySelector(".history-text");

  container.addEventListener("click", function (e) {
    console.log(e.target.className);
    if (e.target.classList.contains("logo2016")) {
      modalImage.src = "img/tmst2016.jpg";
      date.innerHTML = "<strong>Date :</strong> January 9, 2016";
      venue.innerHTML = "<strong>Venue :</strong> Sasana Budaya Ganesha, Bandung";
      theme.innerHTML = "<strong>Theme :</strong> Bandung";
      text.innerHTML = "";
    } else if (e.target.classList.contains("logo2018")) {
      modalImage.src = "img/tmst2018.jpeg";
      date.innerHTML = "<strong>Date :</strong> September 29, 2018";
      venue.innerHTML = "<strong>Venue :</strong> Lapangan Pussenif, Bandung";
      theme.innerHTML = "<strong>Theme :</strong> HIFESTUS";
      text.innerHTML = "Once upon a time, a long time ago, the mighty Zeus was so angry at Prometheus for giving people secret of fire, even though he had told all the gods not to do that. Also, Zeus gave the newlyweds a little box, with a big lock on it. He said to Pandora not to ever open the box, and he gave the key to Epimetheus. Oh! Out of the box flew every kind of trouble that people had never known about before: sicknesses, and diseases, and worries, and crimes, and hate, and envy, and all sorts of bad things. The bad things began to fly away all over the place.Unexpectedly, the very last thing to fly out of the box was not as ugly as the others. In fact it was very beautiful.";
    } else if (e.target.classList.contains("logo2019")) {
      modalImage.src = "img/tmst2019.jpg";
      date.innerHTML = "<strong>Date :</strong> October 12, 2019";
      venue.innerHTML = "<strong>Venue :</strong> Lapangan Pussenif, Bandung";
      theme.innerHTML = "<strong>Theme :</strong> RATETRA";
      text.innerHTML = "Long ago, in a word that was born from hope, was a deep dark ocean called Nu. There emerged an egg from the dark depth of the ocean. Ra kept on naming everything until the earth is formed. And at the peak of his creations, he created the first pair of humans, a man and a woman. Finally, after ruling Egypt thousands of year, Ra became older and older. He started to lose the respect from his people, «Look at Ra! He is as old as time. He has silver bones, golden flesh, and hair of lapis lazuli.» Ra, enraged by the act of his people, realized his sacrifice for humankind was all but for nothing. And therefore he chose to become god.";
    } else if (e.target.classList.contains("logo2020")) {
      modalImage.src = "img/tmst2020.jpg";
      date.innerHTML = "<strong>Date :</strong> November 20, 2020";
      venue.innerHTML = "<strong>Venue :</strong> Virtual Concert";
      theme.innerHTML = "<strong>Theme :</strong> RHEMURA";
      text.innerHTML = "Lemuria is the name of a lost land that is estimated to have existed since 75,000-11,000 BC. It is based on QS 2:30, the existence of Lemuria & Atlantis could be older than the Prophet Adam himself. Arkhytirema was often called Aki Tiren, the ancestor of the Sundanese, therefore the language used by the Lemurians to communicate was Zhunnda.";
    }
  });
}
