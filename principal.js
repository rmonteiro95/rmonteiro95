window.addEventListener("load", iniciar);
var slideIndex;    
function iniciar(){
    slideIndex = 1;
    showSlides(slideIndex);
    document.getElementById("flechaE").addEventListener("click", slideE);
    document.getElementById("flechaD").addEventListener("click", slideD);
}
function slideE() {
    showSlides(slideIndex += 1);
}
function slideD() {
    showSlides(slideIndex += -1);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("imgSlide");
    if (n > slides.length) {
       slideIndex = 1
    }    
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";
}