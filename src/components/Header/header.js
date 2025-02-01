import smallLogo from "../../assets/small-logo.svg";

const createHeader = () => {
  const header = document.querySelector("header");
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
};

export default createHeader;
