import Node from "./nodo.js";
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
        }
    }
}