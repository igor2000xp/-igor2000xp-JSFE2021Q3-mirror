const iconMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu-list');
const navLink = document.querySelectorAll(".menu-list__link");

navLink.forEach(n => n.addEventListener("click", closeMenu));
iconMenu.addEventListener("click", showMenu);

function showMenu() {
    iconMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    iconMenu.classList.remove("active");
    navMenu.classList.remove("active");
}

