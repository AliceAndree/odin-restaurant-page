import bannerImg from "../../assets/location-banner.jpg";
import chevron from "../../assets/chevron.svg";

const createHoursLocation = () => {
  const content = document.querySelector("#content");
  const locationBannerSection = document.createElement("section");
  const banner = document.createElement("div");
  const hoursLocationDiv = document.createElement("div");
  const hoursLocation = document.createElement("h2");
  const chevrons = document.createElement("div");
  const chevronOne = document.createElement("img");
  const chevronTwo = document.createElement("img");
  const chevronThree = document.createElement("img");
  const adress = document.createElement("h5");
  const hoursTitle = document.createElement("h4");
  const hours = document.createElement("span");
  const locationParagraph = document.createElement("p");

  banner.id = "top-banner";
  banner.style.setProperty(`--top-banner-image`, `url("${bannerImg}")`);
  locationBannerSection.id = "location-banner-section";
  locationBannerSection.classList.add("page");
  locationBannerSection.appendChild(banner);
  content.appendChild(locationBannerSection);

  hoursLocation.textContent = "Hours & Location";
  hoursLocationDiv.id = "hours-location-block";
  hoursLocationDiv.appendChild(hoursLocation);

  chevronOne.src = chevron;
  chevronTwo.src = chevron;
  chevronThree.src = chevron;

  chevrons.id = "chevrons";
  chevrons.appendChild(chevronOne);
  chevrons.appendChild(chevronTwo);
  chevrons.appendChild(chevronThree);

  hoursLocationDiv.appendChild(chevrons);

  adress.id = "adress";
  adress.innerHTML = `1600 20th St, <br/>
                        Denver, CO 80202 <br/>
                        720.769.1414`;

  hoursLocationDiv.appendChild(adress);

  hoursTitle.id = "hours-title";
  hoursTitle.textContent = "Open Every Day Of The Week!";
  hours.id = "hours";
  hours.textContent = "7am - 3pm";
  hoursTitle.appendChild(hours);

  hoursLocationDiv.appendChild(hoursTitle);

  locationParagraph.innerHTML = `*(Hours may vary based on Rockies home games / other events)*<br/><br/>
                                Located in the heart of Denver's bustling McGregor Square, The Original, 
                                fondly known by locals as "The OG," redefines the brunch experience. 
                                Renowned as a premier brunch destination in Denver, 
                                The OG excels in crafting exquisite breakfast, lunch and brunch dishes. 
                                As a celebrated brunch spot near Coors Field,
                                 we pride ourselves on being pioneers in the culinary scene, 
                                 offering an unforgettable dining experience. 
                                 Whether you're seeking the best brunch in Denver, 
                                 a delightful breakfast near Coors Field, 
                                 or a lunch spot that combines innovation with classic flavors, 
                                 The OG stands as your go-to destination. 
                                 Join us at The OG, where every dish is a testament to our passion for exceptional brunch experiences.<br/><br/>
                                Valet parking is also available at The Rally Hotel for $15 on Wazee Street between 19th and 20th.`;

  hoursLocationDiv.appendChild(locationParagraph);
  locationBannerSection.appendChild(hoursLocationDiv);
};

export default createHoursLocation;
