const mainNavTriggerLabelEle = document.querySelector(".main-nav__trigger-label");
const mainNavPrimaryWrapperEle = document.querySelector(".main-nav__primary-wrapper");
const mainNavTriggerLabel = document.querySelector(".main-nav__trigger-label svg");
const mainNavLogo = document.querySelector(".main-nav__logo");
const moreButton = document.querySelector(".more-Button");
const mainNavMore = document.querySelector(".main-nav__more");

mainNavTriggerLabelEle.addEventListener("click",()=> {
    mainNavPrimaryWrapperEle.classList.toggle("selected");
    mainNavTriggerLabel.classList.toggle("selected");
    mainNavLogo.classList.toggle("selected");
    mainNavTriggerLabelEle.classList.toggle("selected");
})

moreButton.addEventListener("click",()=> {
    mainNavMore.classList.toggle("selected");

})