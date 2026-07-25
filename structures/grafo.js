class Grafo{
    constructor(){
        this.list = new Map();
    }

    addVertex(codigo){
        if(!this.list.has(codigo)){
            this.list.set(codigo, []);
        }
    }

    addEdge(codigo1, codigo2){
        if(this.list.has(codigo1) && this.list.has(codigo2)){
            this.list.get(codigo1).push(codigo2);
            this.list.get(codigo2).push(codigo1);
        }
    }

    getRecomendaciones(codigo){
        if(!this.list.has(codigo)){
            return [];
        }
        return this.list.get(codigo);
    }
}

export default Grafo;