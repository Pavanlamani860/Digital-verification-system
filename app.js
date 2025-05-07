document.addEventListener("DOMContentLoaded", () => {
    const arrow = document.querySelector(".has-submenu .arrow");
    const submenu = document.querySelector(".has-submenu .scan-sub-menu");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");
    const navbar = document.querySelector(".navbar");

    // Toggle submenu on arrow click
    arrow.addEventListener("click", (e) => {
        e.preventDefault();
        submenu.classList.toggle("active");
        arrow.classList.toggle("rotated");
    });

    // Toggle nav menu on hamburger click
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Add scrolled class on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
