const boton = document.getElementById("btnEnviar");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
  mensaje.classList.remove("oculto");
  boton.textContent = "Enviado";
});

// Efecto hover en servicios
document.addEventListener("DOMContentLoaded", () => {
    const servicios = document.querySelectorAll(".servicio");
    
    servicios.forEach((servicio) => {
        servicio.addEventListener("mouseenter", () => {
            servicio.style.transform = "scale(1.05)";
            servicio.style.transition = "transform 0.3s";
        });
        
        servicio.addEventListener("mouseleave", () => {
            servicio.style.transform = "scale(1)";

// Validación del formulario de contacto
function validarFormulario(e) {
    e.preventDefault();
    
   const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Validación de campos vacíos
    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
        alert('Por favor, completa todos los campos');
        return;
    }
    
    // Validación adicional de email
    if (!email.includes('@')) {
        alert('Por favor, ingresa un email válido');
        return;
    }
    
    // Procesar formulario
    console.log('Nombre:', nombre.trim().toUpperCase());
    console.log('Email:', email.trim());
    console.log('Mensaje:', mensaje.trim());
    
    alert('Formulario enviado correctamente');
}

// Event listener para el formulario
const formulario = document.getElementById('formularioContacto');
if (formulario) {
    formulario.addEventListener('submit', validarFormulario);
}
        });
    });
});