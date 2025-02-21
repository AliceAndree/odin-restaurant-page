import facebookSvg from "../assets/facebook.svg";
import instagramSvg from "../assets/instagram.svg";

const createFooter = () => {
  const footer = document.querySelector("footer");
  const socials = document.createElement("div");
  const facebook = document.createElement("img");
  const instagram = document.createElement("img");
  const nav = document.createElement("nav");
  const tabs = [
    "Careers",
    "Gift Cards",
    "Accessibility Statement",
    "Press",
    "Contact",
    "Privacy Policy",
    "Email Signup",
  ];

  facebook.src = facebookSvg;
  instagram.src = instagramSvg;
  socials.id = "socials";
  socials.appendChild(facebook);
  socials.appendChild(instagram);

  footer.appendChild(socials);

  for (let i = 0; i < tabs.length; i++) {
    const tab = document.createElement("button");
    tab.textContent = tabs[i];
    nav.appendChild(tab);
  }

  footer.appendChild(nav);
};

export default createFooter;
