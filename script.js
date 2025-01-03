const images = [
  "images/carrousel/photo1.jpg",
  "images/carrousel/photo2.jpg",
  "images/carrousel/photo3.jpg",
  "images/carrousel/photo4.jpg",
  "images/carrousel/photo5.jpg",
  "images/carrousel/photo6.jpg",
];

let currentIndex = 0;

const carouselImage = document.querySelector(".carousel-image");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

prevButton.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
  carouselImage.src = images[currentIndex];
});

nextButton.addEventListener("click", () => {
  currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
  carouselImage.src = images[currentIndex];
});
