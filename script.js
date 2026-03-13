console.log("Construction Website Ready");

const topBtn = document.getElementById("topBtn");

window.onscroll = function() {
if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
topBtn.style.display = "block";
}else{
topBtn.style.display = "none";
}
};

topBtn.onclick = function(){
window.scrollTo({
top:0,
behavior:"smooth"
});
};

const toggle = document.getElementById("darkModeToggle");

toggle.onclick = function(){
document.body.classList.toggle("dark-mode");
};

const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {

elements.forEach(el => {

const position = el.getBoundingClientRect().top;
const screen = window.innerHeight;

if(position < screen - 100){
el.classList.add("show");
}

});

});

window.addEventListener("load", function(){

const loader = document.getElementById("loader");

loader.style.display = "none";

});

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.onclick = function(){

menu.classList.toggle("active");

};

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;

if(pageYOffset >= sectionTop - 100){
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function(){

if(window.scrollY > 50){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});