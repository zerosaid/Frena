document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const accordions = document.querySelectorAll(".accordion-btn");

    // Persistencia del menú
    const savedState = localStorage.getItem("menuState");
    if (savedState === "open") navLinks.classList.add("show");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        localStorage.setItem("menuState", navLinks.classList.contains("show") ? "open" : "closed");
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
            localStorage.setItem("menuState", "closed");
        });
    });

    // Acordeones para mostrar/ocultar información
    accordions.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("active");
            const content = btn.nextElementSibling;
            content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
        });
    });
});
