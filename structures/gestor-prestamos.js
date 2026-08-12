import Pila from "./pilas.js";
import Queue from "./colas.js";


class GestorPrestamos {

    constructor(){
        this.historial = new Pila();
        this.colasEspera = new Map();
    }

    obtenerCola(codigo){
        if (!this.colasEspera.has(codigo)){
            this.colasEspera.set(codigo, new Queue());
        }
        return this.colasEspera.get(codigo);
    }

    prestar(libro, nombreUsuario){

        if (libro.estado === "Disponible"){
            libro.estado = "Prestado";

            this.historial.agregar({
                tipo: "prestamo",
                libro,
                usuario: nombreUsuario,
                fecha: new Date()
            });

            return {
                ok: true,
                mensaje: `"${libro.titulo}" fue prestado a ${nombreUsuario}.`
            };
        }

        const cola = this.obtenerCola(libro.codigo);
        cola.enqueue(nombreUsuario);

        this.historial.agregar({
            tipo: "reserva",
            libro,
            usuario: nombreUsuario,
            fecha: new Date()
        });

        return {
            ok: false,
            mensaje: `"${libro.titulo}" ya está prestado. ${nombreUsuario} entra en la fila de espera en la posición ${cola.size()}.`
        };
    }

    devolver(libro){

        const cola = this.obtenerCola(libro.codigo);

        if (!cola.isEmpty()){
            const siguienteUsuario = cola.dequeue();
            libro.estado = "Prestado";

            this.historial.agregar({
                tipo: "entrega-reserva",
                libro,
                usuario: siguienteUsuario,
                fecha: new Date()
            });

            return {
                mensaje: `"${libro.titulo}" fue devuelto y entregado automáticamente a ${siguienteUsuario} (primero en la fila).`
            };
        }

        libro.estado = "Disponible";

        this.historial.agregar({
            tipo: "devolucion",
            libro,
            usuario: null,
            fecha: new Date()
        });

        return {
            mensaje: `"${libro.titulo}" fue devuelto y ahora está disponible.`
        };
    }

    deshacer(){

        if (this.historial.esta_vacia()){
            return null;
        }

        const accion = this.historial.quitar();
        const libro = accion.libro;
        const cola = this.obtenerCola(libro.codigo);

        switch (accion.tipo){

            case "prestamo":
                libro.estado = "Disponible";
                break;

            case "reserva":
                cola.removerUltimo();
                break;

            case "devolucion":
                libro.estado = "Prestado";
                break;

            case "entrega-reserva":
                libro.estado = "Prestado";
                cola.devolverAlFrente(accion.usuario);
                break;
        }

        return accion;
    }

    obtenerHistorial(){
        return this.historial.get_items().slice().reverse();
    }

    obtenerColaComoArray(codigo){
        return this.obtenerCola(codigo).getItems();
    }
}

export default GestorPrestamos;
