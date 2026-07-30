class Nodo {
    constructor(valor){
        this.valor=valor
        this.siguiente=null
        this.anterior=null
    }
}

class ListaEnlazadaDoble {
    constructor(){
        this.cabeza=null
        this.cola=null
        this.longitud=0
    }

    agregar(valor){
        this.longitud++
        const nodo = new Nodo(valor)
        if (this.cabeza==null){
            this.cabeza=nodo
            this.cola=nodo
        }
        else {
            this.cola.siguiente=nodo
            nodo.anterior=this.cola
            this.cola=nodo
        }
    }
    
    mostrar(){
        let nodo_actual=this.cabeza
        console.log("----")
        console.log(`cabeza: ${this.cabeza?.valor}`);
        console.log(`cola:  ${this.cola?.valor}`);
        while (nodo_actual != null) {
            console.log(`valor: ${nodo_actual.valor}
                         siguiente: ${nodo_actual.siguiente?.valor}
                         anterior: ${nodo_actual.anterior?.valor}`)
                         nodo_actual=nodo_actual.siguiente
            }
        
    
    }
}