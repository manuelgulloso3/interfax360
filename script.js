// script.js
// Puedes agregar aquí funciones adicionales si deseas interacción personalizada

document.addEventListener('DOMContentLoaded', () => {
  console.log('Jagua Visión 360 - Página cargada correctamente');
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario

    const tipoUsuario = document.getElementById("tipo_usuario").value;
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;
    const mensaje = document.getElementById("mensaje");

    // Datos de prueba
    if (tipoUsuario === "natural" && usuario === "manuel" && password === "12345") {
      mensaje.textContent = "Inicio de sesión exitoso. Redirigiendo...";
      mensaje.style.color = "green";

      setTimeout(() => {
        window.location.href = "hojadevida.html"; // Redirige si todo es correcto
      }, 1000);
    } else {
      mensaje.textContent = "Usuario o contraseña incorrectos.";
      mensaje.style.color = "red";
    }
  });
});