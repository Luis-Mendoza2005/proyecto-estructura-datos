import Grafo from "../structures/grafo.js";

const grafo = new Grafo()


grafo.addVertex(1001);
grafo.addVertex(1002);
grafo.addVertex(1003);
grafo.addVertex(1004);
grafo.addVertex(1005);
grafo.addVertex(1006);
grafo.addVertex(1007);
grafo.addVertex(1008);
grafo.addVertex(1009);
grafo.addVertex(1010);


grafo.addEdge(1001,1002);
grafo.addEdge(1001,1003);
grafo.addEdge(1001,1004);

grafo.addEdge(1002,1004);

grafo.addEdge(1003,1004);



grafo.addEdge(1005,1006);
grafo.addEdge(1005,1007);
grafo.addEdge(1005,1008);

grafo.addEdge(1006,1008);



grafo.addEdge(1009,1010);

export default grafo;