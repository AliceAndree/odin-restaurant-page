import buildingImg from "../assets/building.jpg";
import menuBorderImg from "../assets/menu-border.png";

const createHappeningsSection = () => {
  const happeningsSection = document.querySelector("#happenings-section");
  const happeningsImage = document.createElement("div");
  const happeningsPresentation = document.createElement("div");

  happeningsImage.id = "happenings-image";
  happeningsImage.style.setProperty(
    `--building-image`,
    `url("${buildingImg}")`
  );
  //   happeningsSection.appendChild(menuImage);

  const happeningsTitle = document.createElement("h2");
  happeningsTitle.textContent = "Happenings";

  const happeningsParagraph = document.createElement("p");
  happeningsParagraph.innerHTML = `Stay tuned to our website and social media for the latest happenings and exclusive events at The KT, 
                                the heart of Denver's dynamic brunch and dining scene. Indulge in our themed brunches, 
                                relish our monthly specials, and join us in giving back to the community. 
                                There’s always something new and exciting to look forward to. <br/><br/>
                                Whether you’re a local foodie or a visitor exploring the wonders of Denver, 
                                our doors are always open, inviting you to a place where every brunch is not just a meal, 
                                but an KT experience. <br/><br/> Don’t miss out – book your table today and follow us on Instagram for daily inspirations and surprises!`;

  const happeningsButton = document.createElement("button");
  happeningsButton.textContent = "View Happenings";

  happeningsPresentation.id = "happenings-presentation";
  happeningsPresentation.style.setProperty(
    `--menu-border`,
    `url("${menuBorderImg}")`
  );
  happeningsPresentation.appendChild(happeningsTitle);
  happeningsPresentation.appendChild(happeningsParagraph);

  happeningsSection.appendChild(happeningsPresentation);
  happeningsSection.appendChild(happeningsImage);

  happeningsButton.style.left = `${100}px `;
  happeningsSection.appendChild(happeningsButton);

  window.addEventListener("resize", () => {
    happeningsButton.style.left = `${100}px `;
  });

  document.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 2375) {
      happeningsButton.style.zIndex = "-100";
    } else {
      happeningsButton.style.zIndex = "100";
    }
  });
};

export default createHappeningsSection;
