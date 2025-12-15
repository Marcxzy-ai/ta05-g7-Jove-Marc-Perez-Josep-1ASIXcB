// proyecto1.js - JavaScript EXCLUSIVO para proyecto1.html
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página Proyecto 1 cargada');

    // Resaltar enlace activo
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === 'index.html#proyectos') {
            link.classList.add('active');
        }
    });

    // Animación de entrada para el contenido
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';

        setTimeout(() => {
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 300 + (index * 200));
    });
});