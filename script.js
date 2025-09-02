let slideIndex = 0;
let slideInterval;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

function startSlideShow() {
  showSlides();
  slideInterval = setInterval(showSlides, 5000); // change slide every 3 sec
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

// Event binding
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".image-slider");

  if (slider) {
    slider.addEventListener("mouseenter", startSlideShow);
    slider.addEventListener("mouseleave", stopSlideShow);
    showSlides(); // show first image immediately
  }
});
