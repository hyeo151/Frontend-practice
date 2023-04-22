const burgerMenu = document.querySelector(".fa-bars");
const pageButtonContainer = document.querySelector(".page-button-container");
const header = document.querySelector("header");

burgerMenu.addEventListener("click",function (){
    pageButtonContainer.classList.toggle("page-button-active");
    header.style = "background-color:#191a1b"
})