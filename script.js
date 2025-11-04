document.addEventListener("DOMContentLoaded", () => {
    // === Menú hamburguesa ===
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Cargar estado del menú guardado
    const menuAbierto = localStorage.getItem("menuAbierto") === "true";
    if (menuAbierto) {
        navLinks.classList.add("show");
        menuToggle.classList.add("active");
    }

    // Evento de clic del botón menú
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        menuToggle.classList.toggle("active");
        localStorage.setItem("menuAbierto", navLinks.classList.contains("show"));
    });

    // === Acordeones (mostrar/ocultar información) ===
    const accordionButtons = document.querySelectorAll(".accordion-btn");

    accordionButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const content = btn.nextElementSibling;

            // Alternar la visibilidad
            content.classList.toggle("open");

            if (content.classList.contains("open")) {
                content.style.maxHeight = content.scrollHeight + "px";
                btn.textContent = "Ocultar información";
            } else {
                content.style.maxHeight = null;
                btn.textContent = "Mostrar información";
            }
        });
    });
});
