// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    const contactForm = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const backButton = document.getElementById('backButton');
    
    // Manejar el envío del formulario
    contactForm.addEventListener('submit', function(event) {
        // Prevenir el envío real del formulario
        event.preventDefault();
        
        // Validar el formulario
        if (validarFormulario()) {
            // Ocultar el formulario
            contactForm.style.display = 'none';
            
            // Mostrar mensaje de confirmación
            confirmationMessage.style.display = 'block';
            
            // Opcional: Aquí podrías enviar los datos a un servidor
            // enviarDatosAlServidor();
        }
    });
    
    // Manejar el botón de volver
    backButton.addEventListener('click', function() {
        // Ocultar mensaje de confirmación
        confirmationMessage.style.display = 'none';
        
        // Mostrar formulario nuevamente
        contactForm.style.display = 'block';
        
        // Limpiar el formulario
        contactForm.reset();
    });
    
    // Función para validar el formulario
    function validarFormulario() {
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const asunto = document.getElementById('asunto').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        
        // Validar que todos los campos estén llenos
        if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
            alert('Gracias por tu mensaje nos pondremos en contacto contigo muy pronto.');
            return false;
        }
        
        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return false;
        }
        
        return true;
    }
    
    // Función para enviar datos al servidor (opcional)
    function enviarDatosAlServidor() {
        // En una aplicación real, aquí enviarías los datos a tu backend
        const formData = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            asunto: document.getElementById('asunto').value,
            mensaje: document.getElementById('mensaje').value
        };
        
        console.log('Datos del formulario:', formData);
        // Aquí iría el código para enviar los datos a tu servidor
        // Por ejemplo, usando fetch() o XMLHttpRequest
    }
});