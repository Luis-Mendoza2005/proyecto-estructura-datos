function insertionSort(libros){
    for(let i = 1; i < libros.length; i++){
        const libroActual = libros[i];
        let j = i -1;
        while (j>=0 && libros[j].titulo.toLowerCase() > libroActual.titulo.toLowerCase()){
            libros[j+1] = libros[j];
            j--;

        }

        libros[j+1] = libroActual;
    }
    return libros;
}

export default insertionSort;