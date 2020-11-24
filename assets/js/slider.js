let slideIndex = 0;

let pause = () => {
   clearInterval(myTimer);
}

let resume = () =>{
   clearInterval(myTimer);
   myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
}


function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  }
}

function showSlides(n) {
  var i;
  var dots = document.getElementsByClassName("dot");
  var slides = document.getElementsByClassName("mySlides");

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

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 2000);
})

function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 2000);
  showSlides(slideIndex = n);
}

var slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
slideshowContainer.addEventListener('mouseenter', pause)
slideshowContainer.addEventListener('mouseleave', resume)

