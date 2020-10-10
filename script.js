// TODO: 
//function to apply the classes to the panels
//event listeners on the click to ignite function

//variables for panels
const panel1 = document.querySelector(".panel1");
const panel2 = document.querySelector(".panel2")
const panel3 = document.querySelector(".panel3")

function openUp() {
    this.classList.add("open-active");
    this.classList.add("open");
    console.log("yyo")
}

function closeBack() {
    this.classList.remove("open-active");
    this.classList.remove("open");
}


//event listeners
panel1.addEventListener("click", openUp);
panel2.addEventListener("click", openUp);
panel3.addEventListener("click", openUp);

panel1.addEventListener("mouseleave", closeBack);
panel2.addEventListener("mouseleave", closeBack);
panel3.addEventListener("mouseleave", closeBack);