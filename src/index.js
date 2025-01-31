import "./styles.css";
import laceBorder from "./assets/border.svg";

const body = document.querySelector("body");
body.style.setProperty(`--lace-border`, `url("${laceBorder}")`);
