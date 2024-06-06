const navToggle = document.querySelector("#navToggle");
const menuWrapper = document.querySelector(".menu-wrapper");
const navIcons = document.querySelectorAll(".navIcon");
const closeIcon = document.querySelector(".closeIcon");

// Adding event listener when the hamburger icon is clicked add open class to menu-wrapper and display the nav menu
// and also add the hidden class to the hamburger icon so it disappear
navToggle.addEventListener("click", () => {
  menuWrapper.classList.toggle("open");
  navIcons.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});

// Adding event listener when the close icon is clicked remove the open class from menu-wrapper and hide the nav menu
// and also add the hidden class to the close icon so it disappear
closeIcon.addEventListener("click", () => {
  menuWrapper.classList.remove("open");
  navIcons.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});
