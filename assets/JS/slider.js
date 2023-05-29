var slideIndex = 1;
showSlides(slideIndex);

// Вперед/назад элементы управления
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Элементы управления миниатюрами изображений
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var img_num = document.getElementsByClassName("full__scrin__item");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      img_num[i].style.display = "none";

  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  img_num[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function full_scrin() {
  var img = document.querySelector(".full__scrin");
  img.style.display = "block";
  img.style.opacity = "1";
  
}

function close_img() {
  var img = document.querySelector(".full__scrin");
  img.style.display = "none";
  img.style.opacity = "0";

}