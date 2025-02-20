import burgerImg from "../assets/burger.jpg";
import menuBorderImg from "../assets/menu-border.png";

const createMenuSection = () => {
  const menuSection = document.querySelector("#menu-section");
  const menuImage = document.createElement("div");
  const menuPresentation = document.createElement("div");

  menuImage.src = burgerImg;
  menuImage.id = "menu-image";
  menuImage.style.setProperty(`--burger-image`, `url("${burgerImg}")`);
  menuSection.appendChild(menuImage);

  const menuTitle = document.createElement("h2");
  menuTitle.textContent = "Our Menus";

  const menuParagraph = document.createElement("p");
  menuParagraph.innerHTML = `The OG is where culinary innovation meets the timeless charm of breakfast and lunch classics. 
                                Our menu, a treasure trove of gourmet pancakes, artisanal breakfast cocktails, and the best mimosas in Denver, promises an unrivaled dining experience. <br/> <br/>
                                Savor the flavors of Denver from decadent French toast to savory benedicts, each dish at The OG is crafted to perfection, making us the go-to spot for weekend brunch in Denver. 
                                Whether you're indulging in a family-friendly brunch or seeking the perfect brunch spot for a lazy Sunday, The OG's unique menu caters to all.`;

  const menuButton = document.createElement("button");
  menuButton.textContent = "View Menus";

  menuPresentation.id = "menu-presentation";
  menuPresentation.style.setProperty(
    `--menu-border`,
    `url("${menuBorderImg}")`
  );
  menuPresentation.appendChild(menuTitle);
  menuPresentation.appendChild(menuParagraph);

  menuSection.appendChild(menuPresentation);
  menuButton.style.left = `${menuPresentation.offsetWidth + 130}px `;
  menuSection.appendChild(menuButton);

  window.addEventListener("resize", () => {
    menuButton.style.left = `${menuPresentation.offsetWidth + 130}px `;
  });

  document.addEventListener("scroll", () => {
    if (window.scrollY > 1255) {
      menuButton.style.zIndex = "-100";
    } else {
      menuButton.style.zIndex = "100";
    }
  });
};
export default createMenuSection;
