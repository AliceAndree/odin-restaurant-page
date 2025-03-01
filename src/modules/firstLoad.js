import laceBorder from "../assets/border.svg";
import header from "../components/Header/header";
import homePage from "../components/Home/home";
import footer from "../modules/footer";

const firstLoad = () => {
  const body = document.querySelector("body");
  body.style.setProperty(`--lace-border`, `url("${laceBorder}")`);

  header();
  homePage();
  footer();
};

export default firstLoad;
