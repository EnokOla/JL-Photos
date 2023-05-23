// gallery images
const galleryImages = [
  {
    id: 1,
    image1: "./images/nature-3.jpeg",
    image2: "./images/portrait-1.jpg",
    image3: "./images/gallery-3.jpg",
    image4: "./images/nature-1.jpeg",
    image5: "./images/gallery-2.jpg",
    image6: "./images/city-4.jpeg",
    image7: "./images/architecture-2.jpg",
    image8: "./images/city-3.jpeg",
    image9: "./images/architecture-1.jpg",
    image10: "./images/portrait-3.jpg",
  },
  {
    id: 2,
    image1: "./images/nature-2.jpeg",
    image2: "./images/portrait-3.jpg",
    image3: "./images/gallery-1.jpg",
    image4: "./images/nature-2.jpeg",
    image5: "./images/gallery-4.jpg",
    image6: "./images/city-4.jpeg",
    image7: "./images/architecture-2.jpg",
    image8: "./images/city-1.jpeg",
    image9: "./images/architecture-1.jpg",
    image10: "./images/portrait-1.jpg",
  }
];

// gallery
const gallerySlider = document.querySelectorAll(".gallery-slider");
const allBtn = document.querySelectorAll(".all-btn");
const natureBtn = document.querySelectorAll(".nature-btn");
const cityBtn = document.querySelectorAll(".city-btn");
const portraitBtn = document.querySelectorAll(".portrait-btn");

gallerySlider.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

allBtn.forEach(function (button) {
  button.addEventListener("click", function (params) {
    counter = 0;
    carousel();
  });
});
natureBtn.forEach(function (button) {
  button.addEventListener("click", function (params) {
    counter = 1;
    carousel();
  });
});
cityBtn.forEach(function (button) {
  button.addEventListener("click", function (params) {
    counter = 2;
    carousel();
  });
});
portraitBtn.forEach(function (button) {
  button.addEventListener("click", function (params) {
    counter = 3;
    carousel();
  });
});

function carousel() {
  gallerySlider.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

// gallery dots ------------------------------------------------------------------

let currentDot = 1;

const dots = document.querySelectorAll(".dots");
const allGridImage1 = document.querySelector(".all-grid-image1")
const allGridImage2 = document.querySelector(".all-grid-image2")
const allGridImage3 = document.querySelector(".all-grid-image3")
const allGridImage4 = document.querySelector(".all-grid-image4")
const allGridImage5 = document.querySelector(".all-grid-image5")
const allGridImage6 = document.querySelector(".all-grid-image6")
const allGridImage7 = document.querySelector(".all-grid-image7")
const allGridImage8 = document.querySelector(".all-grid-image8")
const allGridImage9 = document.querySelector(".all-grid-image9")
const allGridImage10 = document.querySelector(".all-grid-image10")


window.addEventListener("DOMContentLoaded", function (params) {
  showGallery();
});

function showGallery() {
  const show = galleryImages[currentDot];
  allGridImage1.src = show.image1;
  allGridImage2.src = show.image2;
  allGridImage3.src = show.image3;
  allGridImage4.src = show.image4;
  allGridImage5.src = show.image5;
  allGridImage6.src = show.image6;
  allGridImage7.src = show.image7;
  allGridImage8.src = show.image8;
  allGridImage9.src = show.image9;
  allGridImage10.src = show.image10;
}

dots[0].addEventListener("click", function (params) {
  currentDot = 0;
  if (currentDot = 0) {
    dots[0].classList.add("active-dot")
    console.log("catylactus");
  }
  else{
    dots[0].classList.remove("active-dot")
  }

  // console.log("catylactus");
  showGallery()
})

dots[1].addEventListener("click", function (params) {
  currentDot = 1;
  if (currentDot = 0) {
    dots[1].classList.add("active-dot")
    console.log("catylactus");
  }
  else{
    dots[1].classList.remove("active-dot")
  }

  console.log("cat");
  showGallery()
})