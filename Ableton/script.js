const menuIconEle = document.querySelector(".menu-icon");
const menuItemsEle = document.querySelector(".menu-items");
const menuIconSvg = document.querySelector(".menu-icon svg");
const primarySvg = document.querySelector(".primary svg");

menuIconEle.addEventListener("click",()=> {
    menuIconEle.classList.toggle("selected");
    menuItemsEle.classList.toggle("selected");
    menuIconSvg.classList.toggle("selected");
    primarySvg.classList.toggle("selected");
})