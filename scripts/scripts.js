import arbol from "./arbol.js";
import grafo from "./grafo.js";

//Inicio de seccin del arbol binario
//===========================================================
const botonBuscar = document.getElementById("btnBuscar");

if (botonBuscar){
    botonBuscar.addEventListener('click', () => {

        const codigo = Number(
            document.getElementById("codigoLibro").value
        );


        const libro = arbol.search(codigo);


        mostrarResultado(libro);


        document.getElementById("codigoLibro").value = "";

    });
}



function mostrarResultado(libro){

    const resultado = document.getElementById("resultado");


    if(libro === null){

        resultado.innerHTML = `
            <h3>
                Libro no encontrado
            </h3>
            <p>
                No existe ningún libro registrado con ese código
            </p>
        `;

        return;
    }


    resultado.innerHTML = `
        <img src="${libro.imagen}" alt="${libro.titulo}">

        <h2>${libro.titulo}</h2>

        <p><strong>Código:</strong> ${libro.codigo}</p>

        <p><strong>Autor:</strong> ${libro.autor}</p>

        <p><strong>Categoría:</strong> ${libro.categoria}</p>

        <p><strong>Estado:</strong> ${libro.estado}</p>
        <p>
            <button id="btnDetalleLibro">Ver Detalles</button>
        </p>

    `;

    const btnDetalleLibro = document.getElementById("btnDetalleLibro");

    btnDetalleLibro.addEventListener("click", () => {

        window.location.href =
        `detalle-libro.html?codigo=${libro.codigo}`;

    });

}


//Apartado para el boton de volver en la sección del árbol
const btnVolver = document.getElementById("btnVolver");
/*Se ubica un if porque hay páginas las cuales no utilizan el
boton de volver, como es la propia de inicio que index html */
if(btnVolver){
    btnVolver.addEventListener("click", ()=>{
        window.location.href="../index.html";
    })
}


//Apartado para buscar el libro por medio de enter
const inputCodigo = document.getElementById("codigoLibro");
if(inputCodigo){
    inputCodigo.addEventListener("keydown", (event)=>{
        if(event.key === "Enter"){
            document.getElementById("btnBuscar").click();
        }
    })
}

//==========================================================
//Fin de sección de árbol binario

//Inicio de Grafo
//==========================================================

function obtenerCodigoURL(){
    const parametros = new URLSearchParams(window.location.search);
    return Number(parametros.get("codigo"));
}

const detalleLibro = document.getElementById("detalleLibro");
if(detalleLibro){
    const codigo = obtenerCodigoURL();
    const libro = arbol.search(codigo);
    mostrarDatalleLibro(libro);
    mostrarRecomendados(libro);
}

function mostrarDatalleLibro(libro){
    const detalleLibro = document.getElementById("detalleLibro");
    if(libro === null){
        detalleLibro.innerHTML = `
            <h2>Libro no encontrado</h2>

            <p>
                No existe un libro con esé código
            </p>
        `;
        return;
    }

    detalleLibro.innerHTML = `
        <div id="contenidoDetalle">

            <div id="imgDetail">
                <img src="${libro.imagen}" alt="${libro.titulo}">
            </div>

            <div id="infoDetalle">

                <h1>${libro.titulo}</h1>

                <p><strong>Código:</strong> ${libro.codigo}</p>

                <p><strong>Autor:</strong> ${libro.autor}</p>

                <p><strong>Categoría:</strong> ${libro.categoria}</p>

                <p><strong>Estado:</strong> ${libro.estado}</p>

                <p><strong>Descripción:</strong></p>

                <p>${libro.descripcion}</p>

            </div>

        </div>
    `;
}

function mostrarRecomendados(libro){
    const contenedor = document.getElementById("recomendados");
    contenedor.innerHTML = "";
    const codigosRecomendados = grafo.getRecomendaciones(libro.codigo);

    for (const codigo of codigosRecomendados){
        const recomendado = arbol.search(codigo);
        if(recomendado){
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("recomendacion")
            tarjeta.innerHTML += `
                <div class="recomendacion">
                    <img src="${recomendado.imagen}" alt="${recomendado.titulo}">
                    <h3>${recomendado.titulo}</h3>
                    <p>${recomendado.autor}</p>
                </div>
            `;
            tarjeta.addEventListener("click", () =>{
                window.location.href = `detalle-libro.html?codigo=${recomendado.codigo}`;
            });
            contenedor.appendChild(tarjeta)
        }
    }

}