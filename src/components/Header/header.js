import smallLogo from "../../assets/small-logo.svg";

const createHeader = () => {
  const header = document.querySelector("header");
  const headerBackground = document.querySelector("#header-background");
  const headerBlock = document.createElement("div");
  const headerLogo = document.createElement("img");
  const nav = document.querySelector("nav");
  const tabs = [
    "Hours & Location",
    "Menu",
    "Our Story",
    "Happenings",
    "Private Events",
    "Order Online",
    "Reservations",
  ];

  for (let i = 0; i < tabs.length; i++) {
    const tab = document.createElement("button");
    tab.textContent = tabs[i];
    nav.appendChild(tab);
  }

  headerLogo.id = "small-logo";
  headerLogo.src = smallLogo;
  headerBlock.id = "header-block";
  headerBlock.appendChild(headerLogo);
  headerBlock.appendChild(nav);
  header.appendChild(headerBlock);

  document.addEventListener("scroll", () => {
    console.log(window.scrollY);
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
