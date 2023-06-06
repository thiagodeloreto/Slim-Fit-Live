// Script Carrossel
document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".slide");
    var currentSlide = 0;
  
    function showSlide(index) {
      slides[currentSlide].classList.remove("active");
      slides[index].classList.add("active");
      currentSlide = index;
    }
  
    function nextSlide() {
      var nextIndex = currentSlide + 1;
      if (nextIndex >= slides.length) {
        nextIndex = 0;
      }
      showSlide(nextIndex);
    }
  
    setInterval(nextSlide, 3000);
  });

  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navigation');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });