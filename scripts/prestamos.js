import librosPrueba from "../data/librosPrueba.js";
import GestorPrestamos from "../structures/gestor-prestamos.js";

const gestor = new GestorPrestamos();

const inputNombre = document.getElementById("nombreUsuario");
const listaLibrosPrestamo = document.getElementById("listaLibrosPrestamo");
const colaTitulo = document.getElementById("colaTitulo");
const colaEspera = document.getElementById("colaEspera");
const historialLista = document.getElementById("historialLista");
const btnDeshacer = document.getElementById("btnDeshacer");
const btnVolver = document.getElementById("btnVolver");

let codigoSeleccionado = null;

const ETIQUETAS_ACCION = {
    prestamo: "Préstamo",
    reserva: "Entró a la fila de espera",
    devolucion: "Devolución",
    "entrega-reserva": "Entrega por fila de espera"
};

function obtenerNombre(){
    const nombre = inputNombre.value.trim();
    if (!nombre){
        alert("Escribe tu nombre antes de continuar.");
        return null;
    }
    return nombre;
}

function mostrarMensaje(mensaje){
    alert(mensaje);
}

function renderLibros(){

    listaLibrosPrestamo.innerHTML = "";

    librosPrueba.forEach(libro => {

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjetaPrestamo");

        const claseEstado = libro.estado === "Disponible" ? "disponible" : "prestado";
        const enEspera = gestor.obtenerCola(libro.codigo).size();

        tarjeta.innerHTML = `
            <img src="${libro.imagen}" alt="${libro.titulo}">

            <div class="infoPrestamo">
                <span class="codigo-libro">N.º ${libro.codigo}</span>
                <h3>${libro.titulo}</h3>
                <p>${libro.autor}</p>
                <span class="estado ${claseEstado}">${libro.estado}</span>
            </div>

            <div class="accionesPrestamo">
                <button class="btnPrestar">Prestar</button>
                <button class="btnDevolver">Devolver</button>
                <button class="btnVerCola">Ver fila (${enEspera})</button>
            </div>
        `;

        tarjeta.querySelector(".btnPrestar").addEventListener("click", () => {
            const nombre = obtenerNombre();
            if (!nombre) return;

            const resultado = gestor.prestar(libro, nombre);
            mostrarMensaje(resultado.mensaje);
            renderTodo();
        });

        tarjeta.querySelector(".btnDevolver").addEventListener("click", () => {
            if (libro.estado !== "Prestado"){
                mostrarMensaje(`"${libro.titulo}" no está prestado actualmente.`);
                return;
            }

            const resultado = gestor.devolver(libro);
            mostrarMensaje(resultado.mensaje);
            renderTodo();
        });

        tarjeta.querySelector(".btnVerCola").addEventListener("click", () => {
            codigoSeleccionado = libro.codigo;
            renderCola();
        });

        listaLibrosPrestamo.appendChild(tarjeta);
    });
}

function renderCola(){

    if (codigoSeleccionado === null){
        colaTitulo.textContent = "Selecciona \"Ver fila\" en un libro para ver quién espera por él.";
        colaEspera.innerHTML = "";
        return;
    }

    const libro = librosPrueba.find(l => l.codigo === codigoSeleccionado);
    const items = gestor.obtenerColaComoArray(codigoSeleccionado);

    colaTitulo.textContent = `Fila de espera para "${libro.titulo}":`;
    colaEspera.innerHTML = "";

    if (items.length === 0){
        colaEspera.innerHTML = "<li>No hay nadie en espera.</li>";
        return;
    }

    items.forEach((nombre, indice) => {
        const li = document.createElement("li");
        li.textContent = `${indice + 1}. ${nombre}`;
        colaEspera.appendChild(li);
    });
}

function renderHistorial(){

    historialLista.innerHTML = "";

    const acciones = gestor.obtenerHistorial();

    if (acciones.length === 0){
        historialLista.innerHTML = "<li>Todavía no hay movimientos.</li>";
        return;
    }

    acciones.forEach(accion => {

        const li = document.createElement("li");
        const hora = accion.fecha.toLocaleTimeString();
        const etiqueta = ETIQUETAS_ACCION[accion.tipo];
        const usuario = accion.usuario ? ` — ${accion.usuario}` : "";

        li.textContent = `[${hora}] ${etiqueta}: "${accion.libro.titulo}"${usuario}`;

        historialLista.appendChild(li);
    });
}

function renderTodo(){
    renderLibros();
    renderCola();
    renderHistorial();
}

btnDeshacer.addEventListener("click", () => {

    const accion = gestor.deshacer();

    if (!accion){
        mostrarMensaje("No hay acciones para deshacer.");
        return;
    }

    mostrarMensaje(`Se deshizo: ${ETIQUETAS_ACCION[accion.tipo]} de "${accion.libro.titulo}".`);
    renderTodo();
});

if (btnVolver){
    btnVolver.addEventListener("click", () => {
        window.location.href = "../index.html";
    });
}

renderTodo();
