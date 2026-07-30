class Pila{
    #items = [];
    agregar(item){
        this.#items.push(item)
    }
    quitar(){
        return this.#items.pop()
    }
    peek(){
        return this.#items[this.#items.length-1]
    }
    size(){
        return this.#items.length
    }
    esta_vacia(){
        return this.#items.length==0
    }
    get_items(){
        return [...this.#items]
    }
}