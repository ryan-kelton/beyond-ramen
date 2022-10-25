"use strict";
let navUL = document.getElementById("navUL");
let hamburger = document.getElementById("hamburger");
let exit = document.getElementById("exit");

function hamburgerOpen(){
    navUL.classList.add("hamburgerActive");
    hamburger.classList.add("hide");
    exit.classList.remove("hide");
}
function hamburgerClose(){
    navUL.classList.remove("hamburgerActive");
    hamburger.classList.remove("hide");
    exit.classList.add("hide");

}
hamburger.addEventListener("click", hamburgerOpen);
exit.addEventListener("click", hamburgerClose);