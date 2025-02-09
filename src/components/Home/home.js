import logo from "../../assets/logo.svg";
import chevronSvg from "../../assets/chevron.svg";
import downArrowSvg from "../../assets/down-arrow.svg";

const createHomePage = () => {
  document.querySelector("#logo").src = logo;
  const chevrons = document.querySelectorAll(".chevron");
  const downArrow = document.querySelector("#down-arrow");
  const menuSection = "#menu-section";
  chevrons.forEach((chevron) => {
    chevron.src = chevronSvg;
  });

  downArrow.src = downArrowSvg;

  downArrow.addEventListener("click", () => {
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
