// Patrón y cédula
let patron = [];
const patronCorrecto = "321478965";
const cedulaCorrecta = "1130683846";

const puntos = document.querySelectorAll('.punto');
const cedulaInput = document.getElementById('cedula');
const patronSpan = document.getElementById('patron');
const mensaje = document.getElementById('mensaje');
const inputBusqueda = document.getElementById("busqueda");
const listaSugerencias = document.getElementById("lista-sugerencias");

// Manejo de patrón
puntos.forEach(punto => {
  punto.addEventListener('click', () => {
    const numero = punto.dataset.numero;
    if (!patron.includes(numero)) {
      patron.push(numero);
      punto.classList.add('activo');
      patronSpan.textContent = patron.join('-');
    }
  });
});

function verificarIngreso() {
  const cedulaIngresada = cedulaInput.value.trim();
  const patronIngresado = patron.join('');

  if (cedulaIngresada === cedulaCorrecta && patronIngresado === patronCorrecto) {
    mensaje.textContent = "✅ Bienvenido, acceso permitido.";
    mensaje.style.color = "green";
  } else {
    mensaje.textContent = "❌ Datos incorrectos. Intenta de nuevo.";
    mensaje.style.color = "red";
  }
}

function reiniciarPatron() {
  patron = [];
  cedulaInput.value = "";
  puntos.forEach(p => p.classList.remove('activo'));
  patronSpan.textContent = "";
  mensaje.textContent = "";
}

// Buscador
inputBusqueda.addEventListener("focus", () => {
  listaSugerencias.classList.remove("oculto");
});

document.addEventListener("click", e => {
  if (!e.target.closest(".buscador")) {
    listaSugerencias.classList.add("oculto");
  }
});

inputBusqueda.addEventListener("input", buscar);

listaSugerencias.querySelectorAll("li").forEach(item => {
  item.addEventListener("click", () => {
    inputBusqueda.value = item.textContent;
    listaSugerencias.classList.add("oculto");
    buscar();
  });
});

// Buscador mejorado que evita desordenar el diseño
function buscar() {
  const texto = inputBusqueda.value.toLowerCase();
  const tarjetasBox = document.querySelectorAll(".tarjetas-box");

  tarjetasBox.forEach(seccion => {
    const tarjetas = seccion.querySelectorAll(".tarjeta");
    let hayCoincidencia = false;

    tarjetas.forEach(tarjeta => {
      const visible = tarjeta.textContent.toLowerCase().includes(texto);
      tarjeta.style.display = visible ? "block" : "none";
      if (visible) hayCoincidencia = true;
    });

    // Mostrar u ocultar la sección según tenga tarjetas visibles
    seccion.style.display = hayCoincidencia ? "block" : "none";
  });
}
