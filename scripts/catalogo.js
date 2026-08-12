import ListaEnlazadaDoble from "../structures/listas-enlazadas.js";
import librosPrueba from "../data/librosPrueba.js";
import insertionSort from "./insertion-sort.js";

const listaLibros = new ListaEnlazadaDoble();
librosPrueba.forEach(libro => listaLibros.agregar(libro));

 
const TARJETAS_VISIBLES = 4;

let nodoInicio = listaLibros.cabeza;

const carrusel = document.getElementById("carrusel");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const ordenCatalogo = document.getElementById("ordenCatalogo");

if (carrusel){

    renderCarrusel();

    btnSiguiente.addEventListener("click", () => {
        nodoInicio = nodoInicio.siguiente ?? listaLibros.cabeza;
        renderCarrusel();
    });

    btnAnterior.addEventListener("click", () => {
        nodoInicio = nodoInicio.anterior ?? listaLibros.cola;
        renderCarrusel();
    });
}

function renderCarrusel(){

    carrusel.innerHTML = "";

    let nodoActual = nodoInicio;

    for (let i = 0; i < TARJETAS_VISIBLES; i++){

        if (!nodoActual) break;

        const libro = nodoActual.valor;
        carrusel.appendChild(crearTarjetaLibro(libro));

        nodoActual = nodoActual.siguiente ?? listaLibros.cabeza;
    }
}

function crearTarjetaLibro(libro){

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-libro");

    const claseEstado = libro.estado === "Disponible" ? "disponible" : "prestado";

    tarjeta.innerHTML = `
        <span class="codigo-libro">N.º ${libro.codigo}</span>
        <img src="${libro.imagen}" alt="${libro.titulo}">
        <h3>${libro.titulo}</h3>
        <p>${libro.autor}</p>
        <span class="estado ${claseEstado}">${libro.estado}</span>
    `;

    tarjeta.addEventListener("click", () => {
        window.location.href = `ventanas/detalle-libro.html?codigo=${libro.codigo}`;
    });

    return tarjeta;
}

let librosOriginales = listaLibros.obtenerArray();


if (ordenCatalogo){
    ordenCatalogo.addEventListener("change", ()=>{
    ordenarCatalogo(ordenCatalogo.value)
})
}

function ordenarCatalogo(orden){
    if(orden ==="az"){
        const librosOrdenados = insertionSort(listaLibros.obtenerArray())
        listaLibros.actualizarValores(librosOrdenados);
        renderCarrusel();
    }
    if(orden === "original"){
        listaLibros.actualizarValores(librosOriginales);
        renderCarrusel();
    }

}

export default listaLibros;
