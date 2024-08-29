const imgs = document.getElementById("imgs");

const img = document.querySelectorAll("#imgs img");

let idx = 0;

function run() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 100}%)`;
}

setInterval(run, 3000);

// 2nd slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";

  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// readmore

function res() {
    if (x.matches) {
        btnAmt.style.display = "column"
    } else {
        btnAmt.style.display = "row"
    }
}

var x = window.matchMedia("(max-width: 600px)")

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    var btnAmt = document.getElementById("readmore")

    if(dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "&#43;";
        moreText.style.display = "none";
        btnAmt.style.flexDirection = "row"
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "&#x2212; ";
        moreText.style.display = "inline";
        btnAmt.style.flexDirection = "column"
    }
}