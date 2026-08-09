class Queue{
    constructor() {
        this.items=[];
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        if (this.isEmpty()) return null;
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) return null;
        return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    getItems(){
        return [...this.items];
    }

    //Los siguientes dos métodos NO son parte del comportamiento
    //clásico FIFO de una cola, se agregan únicamente para poder
    //deshacer una reserva (quitar al último que entró) o devolver
    //a alguien al frente de la fila cuando se deshace una entrega.
    removerUltimo(){
        return this.items.pop();
    }

    devolverAlFrente(element){
        this.items.unshift(element);
    }
}

export default Queue;