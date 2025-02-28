import bannerImg from "../../assets/location-banner.jpg";

const createHoursLocation = () => {
  const content = document.querySelector("#content");
  const topBannerSection = document.createElement("section");
  const banner = document.createElement("div");

  banner.id = "top-banner";
  banner.style.setProperty(`--top-banner-image`, `url("${bannerImg}")`);
  topBannerSection.id = "top-banner-section";
  topBannerSection.classList.add("page");
  topBannerSection.appendChild(banner);
  content.appendChild(topBannerSection);
};

export default createHoursLocation;
