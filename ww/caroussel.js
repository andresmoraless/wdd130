const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const counter = document.getElementById('carousel-counter');

let index = 0;

function updateCarousel() {
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

function updateCounter() {
  counter.textContent = `${index + 1} / ${slides.length}`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateCarousel();
  updateCounter();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
  updateCounter();
});

window.addEventListener('resize', updateCarousel);

// Run on page load:
updateCarousel();
updateCounter();