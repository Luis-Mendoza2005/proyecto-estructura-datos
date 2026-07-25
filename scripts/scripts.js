import arbol from "./arbol.js";


const botonBuscar = document.getElementById("btnBuscar");


botonBuscar.addEventListener('click', () => {

    const codigo = Number(
        document.getElementById("codigoLibro").value
    );


    const libro = arbol.search(codigo);


    mostrarResultado(libro);


    document.getElementById("codigoLibro").value = "";

});



function mostrarResultado(libro){

    const resultado = document.getElementById("resultado");


    if(libro === null){

        resultado.innerHTML = `
            <h3>
                Libro no encontrado
            </h3>
        `;

        return;
    }


    resultado.innerHTML = `

        <img 
            src="${libro.imagen}"
            width="150"
        >

        <h2>
            ${libro.titulo}
        </h2>

        <p>
            Autor: ${libro.autor}
        </p>

        <p>
            Categoría: ${libro.categoria}
        </p>

        <p>
            Estado: ${libro.estado}
        </p>

    `;

}