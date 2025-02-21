import bannerImg from "../assets/banner.jpg";
import chevron from "../assets/chevron.svg";

const createBannerSection = () => {
  const bannerSection = document.querySelector("#banner-section");
  const banner = document.createElement("div");
  const follow = document.createElement("h2");
  const followDiv = document.createElement("div");
  const insta = document.createElement("a");
  const chevrons = document.createElement("div");
  const chevronOne = document.createElement("img");
  const chevronTwo = document.createElement("img");
  const chevronThree = document.createElement("img");

  banner.id = "banner";
  banner.style.setProperty(`--banner-image`, `url("${bannerImg}")`);
  bannerSection.appendChild(banner);

  insta.textContent = "@alice____andree";
  insta.href = "https://www.instagram.com/alice____andree/";
  insta.target = "_blank";

  follow.textContent = `Follow me`;
  follow.appendChild(insta);
  followDiv.id = "follow";
  followDiv.appendChild(follow);

  chevronOne.src = chevron;
  chevronTwo.src = chevron;
  chevronThree.src = chevron;

  chevrons.id = "chevrons";
  chevrons.appendChild(chevronOne);
  chevrons.appendChild(chevronTwo);
  chevrons.appendChild(chevronThree);

  followDiv.appendChild(chevrons);
  bannerSection.appendChild(followDiv);
};

export default createBannerSection;
