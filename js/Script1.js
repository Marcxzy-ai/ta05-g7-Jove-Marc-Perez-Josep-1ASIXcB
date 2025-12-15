// index.js - JavaScript EXCLUSIVO para index.html
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página principal cargada');

    // Efecto de escritura para el texto del héroe
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        const originalText = heroText.textContent;
        heroText.textContent = '';

        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroText.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 30); // Velocidad más lenta
            }
        };

        // Iniciar después de 1 segundo
        setTimeout(typeWriter, 1000);
    }

    // Efecto hover mejorado para las tarjetas
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        // Animación de entrada
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 200));

        // Efecto hover
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = '#444444';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.borderColor = '#222222';
            this.style.boxShadow = 'none';
        });
    });

    // Navegación suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            if (targetId !== '#') {
                e.preventDefault();

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Actualizar navegación activa al hacer scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav a');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');

            if (link.getAttribute('href') === `#${currentSection}` ||
                (currentSection === 'home' && link.getAttribute('href') === 'index.html')) {
                link.classList.add('active');
            }
        });
    });
});