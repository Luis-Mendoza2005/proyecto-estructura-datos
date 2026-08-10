function insertionSort(libros){
    //Se inicia desde 1 porque se van reocorriendo todos los libros
    //a partir del segundo.
    for(let i = 1; i < libros.length; i++){
        const libroActual = libros[i];
        //Esta representa el libro con el que vamos a comparar.
        //Ya que el insertion sort siempre compara con el que tienes a la
        //izquierda
        let j = i -1;
        while (j>=0 && libros[j].titulo.toLowerCase() > libroActual.titulo.toLowerCase()){
            libros[j+1] = libros[j];
            j--;

        }
        //Aqui esta en la posicon de atras, porque primero
        //se le resta a j, hasta el maximo minimo.
        libros[j+1] = libroActual;
    }
    return libros;
}

export default insertionSort;