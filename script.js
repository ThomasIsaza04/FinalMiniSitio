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
    
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
    
    // Procesar formulario
    console.log('Nombre:', nombre.toUpperCase());
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);
    
    alert('Formulario enviado correctamente');
}

// Event listener para el formulario
var formulario = document.getElementById('formularioContacto');
if (formulario) {
    formulario.addEventListener('submit', validarFormulario);
}
        });
    });
});