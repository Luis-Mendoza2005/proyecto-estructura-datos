import BinarySearchTree from "./structures/BinarySearchTree.js";
import librosPrueba from "./data/librosPrueba.js";

const arbol = new BinarySearchTree()

librosPrueba.forEach(libro => {
    arbol.insert(libro);
})

const libroEncontrado = arbol.search(1008)
console.log(libroEncontrado)
console.log(arbol.search(9999));