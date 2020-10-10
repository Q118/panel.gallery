/** @format */

//variables for panels
const panel1 = document.querySelector(".panel1");
const panel2 = document.querySelector(".panel2");
const panel3 = document.querySelector(".panel3");
const panel4 = document.querySelector(".panel4");
const panel5 = document.querySelector(".panel5");

//functions
function openUp() {
	this.classList.add("open-active");
	this.classList.add("open");
	console.log("yyo");
}
function closeBack() {
	this.classList.remove("open-active");
	this.classList.remove("open");
}

//event listeners
panel1.addEventListener("click", openUp);
panel2.addEventListener("click", openUp);
panel3.addEventListener("click", openUp);
panel4.addEventListener("click", openUp);
panel5.addEventListener("click", openUp);
panel1.addEventListener("mouseleave", closeBack);
panel2.addEventListener("mouseleave", closeBack);
panel3.addEventListener("mouseleave", closeBack);
panel4.addEventListener("mouseleave", closeBack);
panel5.addEventListener("mouseleave", closeBack);

