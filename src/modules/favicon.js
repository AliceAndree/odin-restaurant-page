import fav from "../assets/small-logo.svg";

const createFavicon = () => {
  const favicon = document.querySelector("link[rel~='icon']");
  favicon.href = fav;
};

export default createFavicon;
