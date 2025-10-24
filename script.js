document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtener el botón de alternar (toggle) y el menú
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('navegacion-principal');

    // 2. Escuchar el evento de clic en el botón
    menuToggle.addEventListener('click', function() {
        // Alternar la clase 'open' en el menú para mostrarlo/ocultarlo
        navMenu.classList.toggle('open');
        
        // Manejo de Accesibilidad (ARIA)
        // Cambiar el atributo aria-expanded: true si está abierto, false si está cerrado
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !isExpanded);
    });
});

document.addEventListener('DOMContentLoaded', function() ){
    const contactForm = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const backButton = document.getElementById('backButton');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validarFormulario()) {
            contactForm.style.display = 'none';
            
            confirmationMessage.style.display = 'block';
            
        }
    });
    
    backButton.addEventListener('click', function() {
        confirmationMessage.style.display = 'none';
        
        contactForm.style.display = 'block';
        
        contactForm.reset();
    });
} 