import logoSvg from "../../assets/logo.svg";
import chevronSvg from "../../assets/chevron.svg";
import downArrowSvg from "../../assets/down-arrow.svg";

const createHomePage = () => {
  const heroSection = document.querySelector("#hero-section");
  const logo = document.createElement("img");
  const chevronOne = document.createElement("img");
  chevronOne.classList.add("chevron");
  const chevronTwo = document.createElement("img");
  chevronTwo.classList.add("chevron");
  const downArrow = document.createElement("img");
  downArrow.id = "down-arrow";
  const sloganList = document.createElement("ul");
  const slogans = [
    "comfort",
    chevronOne,
    "classics",
    chevronTwo,
    "curiosities",
  ];

  logo.id = "logo";
  logo.src = logoSvg;
  heroSection.appendChild(logo);

  for (let i = 0; i < slogans.length; i++) {
    const slogan = document.createElement("li");

    if (typeof slogans[i] === "string") {
      slogan.textContent = slogans[i];
    } else {
      slogan.appendChild(slogans[i]);
    }
    sloganList.appendChild(slogan);
  }

  heroSection.appendChild(sloganList);
  const chevrons = document.querySelectorAll(".chevron");

  chevrons.forEach((chevron) => {
    chevron.src = chevronSvg;
  });

  downArrow.src = downArrowSvg;
  heroSection.appendChild(downArrow);

  downArrow.addEventListener("click", () => {
    const menuSection = "#menu-section";
    window.location.href = menuSection;
  });

  document.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
      downArrow.classList.add("hidden");
    } else {
      downArrow.classList.remove("hidden");
    }
  });
};

export default createHomePage;
