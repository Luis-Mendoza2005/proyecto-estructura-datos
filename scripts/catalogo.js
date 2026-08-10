import ListaEnlazadaDoble from "../structures/listas-enlazadas.js";
import librosPrueba from "../data/librosPrueba.js";
import insertionSort from "./insertion-sort.js";
//El catálogo principal se guarda en una lista doblemente enlazada.
//Cada libro es un nodo con puntero "siguiente" y "anterior", y esos
//mismos punteros son los que se usan para mover el carrusel, en vez
//de usar índices de un arreglo.
const listaLibros = new ListaEnlazadaDoble();
librosPrueba.forEach(libro => listaLibros.agregar(libro));

 
//Cuántas tarjetas se muestran al mismo tiempo en el carrusel.
const TARJETAS_VISIBLES = 4;

//Nodo desde el cual se empieza a dibujar el carrusel.
let nodoInicio = listaLibros.cabeza;

const carrusel = document.getElementById("carrusel");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

if (carrusel){

    renderCarrusel();

    btnSiguiente.addEventListener("click", () => {
        //Si ya no hay siguiente, se da la vuelta al inicio de la
        //lista (carrusel circular).
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

        //Avanza por la lista enlazada; si se llega al final,
        //se regresa a la cabeza para mantener el efecto circular.
        nodoActual = nodoActual.siguiente ?? listaLibros.cabeza;
    }
}

function crearTarjetaLibro(libro){

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-libro");

    const claseEstado = libro.estado === "Disponible" ? "disponible" : "prestado";

    tarjeta.innerHTML = `
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

//Copia de los libros necesari para poder cambiar el orden
let librosOriginales = listaLibros.obtenerArray();
function ordenarCatalogo(orden){
    if(orden ==="az"){
        //Aqui se consiguen los libros para usarlos en el insertion sort
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
