import BinarySearchTree from "./structures/BinarySearchTree.js";
import librosPrueba from "./data/librosPrueba.js";

const arbol = BinarySearchTree()

librosPrueba.forEach(libro => {
    arbol.insert(libro);
})