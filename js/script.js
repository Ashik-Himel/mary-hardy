const navToggler = document.querySelector(".header-section nav .fa-bars");
const navMenu = document.querySelector(".header-section nav");
const navLink = document.querySelectorAll(".header-section nav ul a");

navToggler.addEventListener("click", ()=> {
  navMenu.classList.toggle("active");
})
navLink.forEach(n => n.addEventListener("click", ()=> {
  navMenu.classList.remove("active");
}))