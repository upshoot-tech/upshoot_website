let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("h-3", "h-2");
      dots[i].className = dots[i].className.replace("w-3", "w-2");
      dots[i].className = dots[i].className.replace("bg-gray-500", "bg-white");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " h-3 w-3";
  dots[slideIndex-1].className += " bg-gray-500";
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}



