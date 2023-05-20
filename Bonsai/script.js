const tabs = document.querySelectorAll(".menu-dropdown_col1_tab");
const all_content = document.querySelectorAll(".menu-dropdown_col2_content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    all_content.forEach((content) => {
      content.classList.remove("active");
    });
    all_content[index].classList.add("active");
  });
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".second-nav-bar").classList.remove("is-scrolled");
    document.querySelector(".box-shadow").classList.remove("is-scrolled");
  } else {
    document.querySelector(".second-nav-bar").classList.add("is-scrolled");
    document.querySelector(".box-shadow").classList.add("is-scrolled");
  }
  prevScrollpos = currentScrollPos;
};

const mobileMenuIcon = document.querySelector(".mobile-nav-menu-icon");
const mobileNavMenuContainer = document.querySelector(
  ".mobile-nav-menu-container"
);
mobileMenuIcon.addEventListener("click", () => {
  mobileNavMenuContainer.classList.toggle("active");
});

const collapsible = document.querySelectorAll(".mobile-nav-menu-title");
collapsible.forEach((col) => {
  col.addEventListener("click", function () {
    if (!this.classList.contains("direct")) {
      this.classList.toggle("active");
      const dropdown = this.nextElementSibling;
      if (dropdown.style.maxHeight) {
        dropdown.style.maxHeight = null;
      } else {
        dropdown.style.maxHeight = dropdown.scrollHeight + "px";
      }
      const dropdownArrow = this.querySelector(
        ".mobile-nav-menu-icon-wrapper img"
      );
      dropdownArrow.classList.toggle("active");
    }
  });
});
