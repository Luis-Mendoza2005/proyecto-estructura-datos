import arbol from "./arbol.js";

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

    `;

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
    console.log(libro);
}