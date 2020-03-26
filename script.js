var slider = document.querySelector(".slider-image");
var sliderImages = document.querySelectorAll(".slider-image img");

var next = document.querySelector(".next");
var prev = document.querySelector(".prev");

let count = 1;
const size =  sliderImages[0].clientWidth;

slider.style.transform = "translateX(" + (-size * count)  + "px)";

next.addEventListener("click", function(){
slider.style.transition = "all .4s ease";
count++;
slider.style.transform = "translateX(" + (-size * count)  + "px)";
});

prev.addEventListener("click", function(){
slider.style.transition = "all .4s ease";
count--;
slider.style.transform = "translateX(" + (-size * count)  + "px)";
});

slider.addEventListener("transitionend", function(){
if(sliderImages[count].id === "lastimg"){
    slider.style.transition = "none";
    count = sliderImages.length -2;
    slider.style.transform = "translateX(" + (-size * count)  + "px)";
} else if(sliderImages[count].id === "firstimg"){
    slider.style.transition = "none";
    count = 1;
    slider.style.transform = "translateX(" + -size * count  + "px)";
}
});