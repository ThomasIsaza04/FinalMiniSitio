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
        });
    });
});