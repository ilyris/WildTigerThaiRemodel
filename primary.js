let slideIndex = 1;
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");
previousButton.addEventListener("click", () => moveContent(-1));
nextButton.addEventListener("click", () => moveContent(1));
showContent(slideIndex);



// Testimonial Slider Functionality
function moveContent(slideIndexValue) {
    showContent((slideIndex += slideIndexValue));
  }
  function showContent(slideIndexValue) {
    const slideContainer = document.getElementsByClassName("slide-container");
    if (slideIndexValue > slideContainer.length) {
      slideIndex = 1;
    }
    if (slideIndexValue < 1) {
      slideIndex = slideContainer.length;
    }
    for (let value of slideContainer) {
      value.style.display = "none";
    }
    slideContainer[slideIndex - 1].style.display = "flex";
  }