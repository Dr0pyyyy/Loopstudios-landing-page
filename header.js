//Control for showing the right menu
const hamburgerIcon = document.querySelector(".hamburger-icon");
const headerContent = document.querySelector("header .content");
const header = document.querySelector("header");
const nav = document.querySelector("nav");

hamburgerIcon.addEventListener("click", function () {
    if (nav.style.display === "block") {
        nav.style.display = "none";
        header.style.backgroundImage = "url(\"./images/mobile/image-hero.jpg\")";
        headerContent.style.display = "block";
    } else {
        nav.style.display = "block";
        header.style.backgroundImage = "none";
        headerContent.style.display = "none";
    }
});