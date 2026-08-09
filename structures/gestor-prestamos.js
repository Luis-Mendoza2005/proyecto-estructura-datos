import Pila from "./pilas.js";
import Queue from "./colas.js";

//Esta clase se encarga de manejar los préstamos, devoluciones y
//filas de espera de la biblioteca, usando dos estructuras vistas
//en el curso:
//
// - Pila (LIFO): guarda el historial de movimientos, para poder
//   mostrar "lo último que pasó primero" y para poder deshacer la
//   última acción.
//
// - Cola (FIFO): guarda la fila de espera de cada libro. Si un
//   libro ya está prestado, la siguiente persona que lo pide entra
//   a la fila y se le entrega en orden de llegada quiuen se devuelva.
class GestorPrestamos {

    constructor(){
        this.historial = new Pila();
        //Un libro puede tener su propia fila de espera, por eso se
        //guarda una Cola distinta para cada código de libro.
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

        //Si ya está prestado, la persona entra a la fila de espera
        //en vez de llevarse el libro.
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

        //Si hay gente esperando, el libro pasa directo a la
        //primera persona de la fila (FIFO).
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

    //Deshace el último movimiento registrado en la pila del
    //historial (por eso es LIFO: siempre se deshace lo último
    //que ocurrió).
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

    //Devuelve el historial del más reciente al más antiguo,
    //para mostrarlo en pantalla.
    obtenerHistorial(){
        return this.historial.get_items().slice().reverse();
    }

    obtenerColaComoArray(codigo){
        return this.obtenerCola(codigo).getItems();
    }
}

export default GestorPrestamos;
