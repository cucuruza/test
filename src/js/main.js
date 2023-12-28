"use strict";

//pop-up

let buttonOpenPopUp = document.querySelector("#buttonOpenPopUp");
let buttonClosePopUp = document.querySelector(".close");
let popUp = document.querySelector(".pop-up");

buttonOpenPopUp.addEventListener('click', togglePopUp);
buttonClosePopUp.addEventListener('click', togglePopUp);

function togglePopUp() {
	popUp.classList.toggle("hide");
} 

//mobile menu	

let menuButton = document.querySelector(".menu-mobile");
let menu = document.querySelector(".menu");

menuButton.addEventListener('click', toggleMenu);

function toggleMenu () {
	menuButton.classList.toggle("menu-mobile_close");
	menu.classList.toggle("show");
}

//load animation

window.addEventListener('load', showElementsStep1);

function showElementsStep1() {
	setTimeout(() => {
		let line = document.querySelector(".line");
		let h3 = document.querySelector(".h3");
		line.classList.toggle("line_end");
		h3.classList.toggle("fadeIn");

		showElementsStep2();
	}, "1000");
}

function showElementsStep2() {
	setTimeout(() => {
		let ellipseBottom = document.querySelector(".ellipse-bottom");
		let video = document.querySelector(".video__mask");
		
		ellipseBottom.classList.toggle("fadeIn");
		video.classList.toggle("fadeIn");
	}, "1000");
}

//space

let bg = document.querySelector('.space');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.backgroundPosition = '-' + x * 50 + 'px -' + y * 50 + 'px';
});