import "./styles.css";
import firstLoad from "./modules/firstLoad";

firstLoad();

const buttons = document.querySelector("nav").querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("ça click");
  });
});
