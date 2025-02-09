import laceBorder from "../assets/border.svg";
import header from "../components/Header/header";
import homePage from "../components/Home/home";

const firstLoad = () => {
  const body = document.querySelector("body");
  body.style.setProperty(`--lace-border`, `url("${laceBorder}")`);

  header();
  homePage();
};

export default firstLoad;
