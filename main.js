// NAVBAR
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

const isOpen = navLinks.classList.contains("open");
menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line")
});

// SCROLL REVEAL

let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
});

sr.reveal("#nav", {origin: "left", delay: 700});
sr.reveal("#home", {origin: "top", delay: 600} );
sr.reveal(".explore1", {origin: "right", delay: 500});
sr.reveal(".explore2", {origin: "left", delay: 1000});
sr.reveal(".footer", {origin: "bottom", delay: 1000});
