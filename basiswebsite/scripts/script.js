// JavaScript Document
console.log("hi");

var ButtonMenu = document.querySelector(".hamburger")
var PrimaryMenu = document.querySelector(".primary ul")

ButtonMenu.addEventListener("click", ToggleMenu)

function ToggleMenu() {
    PrimaryMenu.classList.toggle("ToonMenu");
    console.log("ndjnjdnc")
}