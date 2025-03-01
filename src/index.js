import "./styles.css";
import "./components/HoursLocation/hoursLocation.css";
import firstLoad from "./modules/firstLoad";
import hoursLocation from "./components/HoursLocation/hoursLocation";
import menu from "./components/Menu/menu";
import ourStory from "./components/OurStory/ourStory";
import happenings from "./components/Happenings/happenings";
import privateEvents from "./components/PrivateEvents/privateEvents";
import orderOnline from "./components/OrderOnline/orderOnline";
import reservations from "./components/Reservations/reservations";
import home from "./components/Home/home";

firstLoad();

const navButtons = document.querySelector("nav").querySelectorAll("button");
const content = document.querySelector("#content");

navButtons.forEach((navButton) => {
  navButton.addEventListener("click", () => {
    content.innerHTML = "";

    const page = navButton.id.replace(/(-.)/g, (x) => x[1].toUpperCase());

    switch (page) {
      case "hoursLocation":
        hoursLocation();
        break;
      case "menu":
        menu();
        break;
      case "ourStory":
        ourStory();
        break;
      case "happenings":
        happenings();
        break;
      case "privateEvents":
        privateEvents();
        break;
      case "orderOnline":
        orderOnline();
        break;
      case "reservations":
        reservations();
        break;
    }

    window.scrollTo(0, 0);
  });
});

const headerLogo = document.querySelector("#small-logo");

headerLogo.addEventListener("click", () => {
  content.innerHTML = "";

  const heroSection = document.createElement("section");
  heroSection.id = "hero-section";
  content.appendChild(heroSection);

  const menuSection = document.createElement("section");
  menuSection.id = "menu-section";
  content.appendChild(menuSection);

  const ctaSection = document.createElement("section");
  ctaSection.id = "cta-section";
  content.appendChild(ctaSection);

  const happeningsSection = document.createElement("section");
  happeningsSection.id = "happenings-section";
  content.appendChild(happeningsSection);

  const bannerSection = document.createElement("section");
  bannerSection.id = "banner-section";
  content.appendChild(bannerSection);

  home();

  window.scrollTo(0, 0);
});
