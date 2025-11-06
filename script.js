const boton = document.getElementById("btnEnviar");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
  mensaje.classList.remove("oculto");
  boton.textContent = "Enviado";
});
