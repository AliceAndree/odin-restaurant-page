import HeroSection from "../../modules/heroSection";
import MenuSection from "../../modules/menuSection";
import CtaSection from "../../modules/ctaSection";
import HappeningsSection from "../../modules/happeningsSection";
import BannerSection from "../../modules/bannerSection";
import Footer from "../../modules/footer";

const createHomePage = () => {
  HeroSection();
  MenuSection();
  CtaSection();
  HappeningsSection();
  BannerSection();
  Footer();
};

export default createHomePage;
