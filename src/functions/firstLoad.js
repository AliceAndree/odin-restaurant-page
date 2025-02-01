import laceBorder from "../assets/border.svg";
import header from "../components/Header/header";

const firstLoad = () => {
  const body = document.querySelector("body");
  body.style.setProperty(`--lace-border`, `url("${laceBorder}")`);

  header();
};

export default firstLoad;
