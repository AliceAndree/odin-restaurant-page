import smallLogo from "../../assets/small-logo.svg";
import home from "../../components/Home/home";

const createHeader = () => {
  const header = document.querySelector("header");
  const headerBackground = document.querySelector("#header-background");
  const headerBlock = document.createElement("div");
  const headerLogo = document.createElement("img");
  const nav = document.querySelector("nav");
  const tabs = [
    { id: "hours-location", title: "Hours & Location" },
    { id: "menu", title: "Menu" },
    { id: "our-story", title: "Our Story" },
    { id: "happenings", title: "Happenings" },
    { id: "private-events", title: "Private Events" },
    { id: "order-online", title: "Order Online" },
    { id: "reservations", title: "Reservations" },
  ];

  for (let i = 0; i < tabs.length; i++) {
    const tab = document.createElement("button");
    tab.textContent = tabs[i].title;
    tab.id = tabs[i].id;
    nav.appendChild(tab);
  }

  headerLogo.id = "small-logo";
  headerLogo.src = smallLogo;
  headerBlock.id = "header-block";
  headerBlock.appendChild(headerLogo);
  headerBlock.appendChild(nav);
  header.appendChild(headerBlock);

  document.addEventListener("scroll", () => {
    if (window.scrollY !== 0) {
      headerBackground.style.setProperty("--header-bottom", "100%");
      headerBackground.style.setProperty(
        "--header-bottom-color",
        "var(--dark-blue)"
      );
    } else {
      headerBackground.style.setProperty("--header-bottom", "0px");
      headerBackground.style.setProperty(
        "--header-bottom-color",
        "transparent"
      );
    }
  });
};

export default createHeader;
