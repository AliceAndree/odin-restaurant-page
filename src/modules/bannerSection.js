import bannerImg from "../assets/banner.jpg";

const createBannerSection = () => {
  const bannerSection = document.querySelector("#banner-section");
  const banner = document.createElement("div");
  banner.id = "banner";
  banner.style.setProperty(`--banner-image`, `url("${bannerImg}")`);
  bannerSection.appendChild(banner);
};

export default createBannerSection;
