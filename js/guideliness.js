let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

let isDragging = false;
let startX = 0;
let startY = 0;
let translateX = 0;
let translateY = 0;

// Navigation between slides
document.querySelector('.next-button').addEventListener('click', () => {
  if (!isDragging) {
    goToSlide(currentSlide + 1);
  }
});

document.querySelector('.prev-button').addEventListener('click', () => {
  if (!isDragging) {
    goToSlide(currentSlide - 1);
  }
});

function goToSlide(index) {
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }
  document.querySelector('.image-slider').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Zoom and drag functionality
slides.forEach((slide) => {
  let image = slide.querySelector('img');

  // Add zoom on drag functionality for every image
  image.addEventListener('mousedown', (e) => {
    e.preventDefault(); // Prevent default behavior like text selection
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    slide.classList.add('dragging');
    image.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    image.style.transform = `scale(2) translate(${translateX}px, ${translateY}px)`;
  });

  window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    slide.classList.remove('dragging');
    image.style.cursor = 'grab';
  });
});

// Auto slide navigation with dragging disabled
// function autoSlide() {
//   if (!isDragging) {
//     goToSlide(currentSlide + 1);
//   }
// }

// Optional: Auto slide every 5 seconds
setInterval(autoSlide, 5000);
