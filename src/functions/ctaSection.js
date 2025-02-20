const creatCtaSection = () => {
  const ctaSection = document.querySelector("#cta-section");
  const ctaList = document.createElement("div");
  ctaList.id = "cta-list";
  const ctaParagraph = document.createElement("p");
  const ctas = [
    "The Time And The Place",
    "Did We Just Become Best Friends?",
    "Hey Party People!",
  ];

  for (let i = 0; i < ctas.length; i++) {
    const cta = document.createElement("button");
    cta.textContent = ctas[i];
    ctaList.appendChild(cta);
  }

  ctaSection.appendChild(ctaList);

  ctaParagraph.textContent = `Welcome to The OG, nestled in the vibrant heart of McGregor Square, 
                            a stone's throw away from the iconic Coors Field. 
                            As one of Denver's top brunch destinations we're delighted to offer 
                            a unique twist on the classics and innovative dishes, 
                            perfectly paired with our signature mimosas and local coffee.`;

  ctaSection.appendChild(ctaParagraph);
};

export default creatCtaSection;
