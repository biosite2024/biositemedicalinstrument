$(document).ready(function() {
  let scale = 1;  // Initial zoom scale

  $('.zoom-target').on('wheel', function(event) {
      if (event.originalEvent.deltaY < 0) {
          // Scrolling up, zoom in
          scale += 0.1;
      } else {
          // Scrolling down, zoom out
          scale -= 0.1;
      }

      // Restrict zoom scale between 0.5x and 2x
      scale = Math.max(0.5, Math.min(scale, 2));

      // Apply the zoom transformation
      $(this).css('transform', `scale(${scale})`);
  });

  function setUpSlider(containerClass, prevButtonClass, nextButtonClass) {
      let currentSlide = 0;
      const slides = document.querySelectorAll(`${containerClass} .slide`);
      const totalSlides = slides.length;

      $(prevButtonClass).on('click', function() {
          currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
          updateSlider(containerClass);
      });

      $(nextButtonClass).on('click', function() {
          currentSlide = (currentSlide + 1) % totalSlides;
          updateSlider(containerClass);
      });

      function updateSlider(containerClass) {
          $(containerClass).css('transform', `translateX(-${currentSlide * 100}%)`);
      }
  }

  setUpSlider('.left-slider', '.left-prev', '.left-next');
  setUpSlider('.right-slider', '.right-prev', '.right-next');
});