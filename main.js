var modalImg = document.getElementById("img01");

// images

const images = document.querySelectorAll(".hover-shadow.cursor");
images.forEach(function(image, index) {
  image.addEventListener("click", function() {
    openModal();
    currentSlide(index + 1);
  });
});

function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.body.classList.add('disableScroll');
  document.documentElement.classList.add('disableScroll');
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.body.classList.remove('disableScroll');
  document.documentElement.classList.remove('disableScroll');
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

window.addEventListener('resize', showSlides());

function showSlides(n) {

  var slides = document.getElementsByClassName("hover-shadow cursor");
  if(window.innerWidth <= 575) {
    var modalImg = document.getElementById("img01mobile");
    var prev = document.getElementsByClassName('.prev');
    var next = document.getElementsByClassName('.next');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    modalImg.src = slides[slideIndex - 1].src;
  } else {
    var modalImg = document.getElementById("img01");

    var prev = document.getElementsByClassName('.prev');
    var next = document.getElementsByClassName('.next');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    modalImg.src = slides[slideIndex - 1].src;
  
  }
}



