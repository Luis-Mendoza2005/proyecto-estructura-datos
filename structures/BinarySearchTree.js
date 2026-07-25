import Nodo from "./nodo.js";
class BinarySearchTree{
    constructor(){
        this.root = null
    }
    insert(libro){
        const newNodo = new Nodo(libro);
        if(this.root === null){
            this.root = newNodo;
        } else{
            this.insertNode(this.root, newNodo)
        }
    }

    insertNode(curretNodo, newNodo){
        if(newNodo.libro.codigo === curretNodo.libro.codigo){
            return;
        }
        if(newNodo.libro.codigo < curretNodo.libro.codigo){
            if(curretNodo.left === null){
                curretNodo.left = newNodo;
            }else{
                this.insertNode(curretNodo.left, newNodo);
            }
        }else{
            if(curretNodo.right === null){
                curretNodo.right = newNodo;
            }else{
                this.insertNode(curretNodo.right, newNodo);
                /*El hecho de volver a usar la función se conoce
                como recursividad, es donde el método se llama a si mismo
                 */
            }
        }
    }

    search(codigo){
        if(this.root === null){
            return null;
        }
        return this.searchNode(this.root, codigo);
    }

    searchNode(currentNode, codigo) {
        if (currentNode === null) {
            return null;
        }
        if (codigo === currentNode.libro.codigo) {
            return currentNode.libro;
        }
        if (codigo < currentNode.libro.codigo) {
            return this.searchNode(currentNode.left, codigo);
        }
        return this.searchNode(currentNode.right, codigo);
    }

    inOrder(){
        const libros = [];
        this.inOrderTraversal(this.root, libros);
        return libros;
    }
    inOrderTraversal(currentNode, libros){
        if(currentNode === null){
            return;
        }
        this.inOrderTraversal(currentNode.left, libros);

        libros.push(currentNode.libro);

        this.inOrderTraversal(currentNode.right, libros);
        
    }
}

export default BinarySearchTree;