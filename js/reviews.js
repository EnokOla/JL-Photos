const reviews = [
  {
    id: 1,
    img: "./images/testimonial1.jpg",
    name: "Casey Brown",
    testimonial:
      "Thy word have i hid in mine heart that i might not sin against thee. Flee from all appearance of evil. Remember, be holy, just as your Father in heaven is Holy.",
  },
  {
    id: 2,
    img: "./images/testimonial2.jpg",
    name: "Amelia Smith",
    testimonial:
      "I can do all things through christ that strengthens me. For ye have not recieved the spirit of bondage again to fear but ye have recieved the spirit of adoption whereby we cry abba father.",
  },
  {
    id: 3,
    img: "./images/testimonial3.jpg",
    name: "Adeola Jacob",
    testimonial:
      "Wherefore seeing we also are compassed about with so great a cloud of witnesses, let us set aside every weight, and the sin which doth so easily beset us and let us run with patience the race that is set before us.",
  },
  {
    id: 4,
    img: "./images/testimonial4.jpg",
    name: "Isabella Cortés",
    testimonial:
      "Looking unto Jesus the author and finisher of our faith; who for the joy that was set before him endured the cross, despising the shame, and is set down at the right hand of the throne of God.",
  },
];

let currentItem = 0;

const Images = document.querySelector("#image");
const author = document.querySelector("#name");
const reviewInfo = document.querySelector("#review");

// Review Btns
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
// slider indicators
const sliderIndicator1 = document.querySelector(".slider-indicator-1");
const sliderIndicator2 = document.querySelector(".slider-indicator-2");
const sliderIndicator3 = document.querySelector(".slider-indicator-3");
const sliderIndicator4 = document.querySelector(".slider-indicator-4");

window.addEventListener("DOMContentLoaded", function (params) {
  showPerson();
});

function showPerson() {
  if (currentItem === 0) {
    sliderIndicator1.classList.add("active-indicator");
    sliderIndicator2.classList.remove("active-indicator");
    sliderIndicator3.classList.remove("active-indicator");
    sliderIndicator4.classList.remove("active-indicator");
  }
  if (currentItem === 1) {
    sliderIndicator2.classList.add("active-indicator");
    sliderIndicator1.classList.remove("active-indicator");
    sliderIndicator3.classList.remove("active-indicator");
    sliderIndicator4.classList.remove("active-indicator");
  }
  if (currentItem === 2) {
    sliderIndicator3.classList.add("active-indicator");
    sliderIndicator1.classList.remove("active-indicator");
    sliderIndicator2.classList.remove("active-indicator");
    sliderIndicator4.classList.remove("active-indicator");
  }
  if (currentItem === 3) {
    sliderIndicator4.classList.add("active-indicator");
    sliderIndicator1.classList.remove("active-indicator");
    sliderIndicator2.classList.remove("active-indicator");
    sliderIndicator3.classList.remove("active-indicator");
  }

  const item = reviews[currentItem];
  Images.src = item.img;
  author.textContent = item.name;
  reviewInfo.textContent = item.testimonial;
}

prevBtn.addEventListener("click", function (params) {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});
nextBtn.addEventListener("click", function (params) {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});
