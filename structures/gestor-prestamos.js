import Pila from "./pilas.js";
import Queue from "./colas.js";

class GestorPrestamos {

    constructor(){
        this.historial = new Pila();
        this.colasEspera = new Map();
        this.prestatarios = new Map();
    }

    obtenerCola(codigo){
        if (!this.colasEspera.has(codigo)){
            this.colasEspera.set(codigo, new Queue());
        }

        return this.colasEspera.get(codigo);
    }

    prestar(libro, nombreUsuario){

        const cola = this.obtenerCola(libro.codigo);
        const prestatario = this.prestatarios.get(libro.codigo);

        const mismoUsuario = (usuario) =>
            usuario?.trim().toLowerCase() === nombreUsuario.trim().toLowerCase();

        if (mismoUsuario(prestatario)){
            return {
                ok: false,
                mensaje: `"${libro.titulo}" ya está prestado a tu nombre.`
            };
        }

        const yaEstaEnEspera = cola.getItems().some(mismoUsuario);

        if (yaEstaEnEspera){
            return {
                ok: false,
                mensaje: `Ya estás registrado en la fila de espera de "${libro.titulo}".`
            };
        }

        if (libro.estado === "Disponible"){
            libro.estado = "Prestado";
            this.prestatarios.set(libro.codigo, nombreUsuario);

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

    devolver(libro, nombreUsuario){

        const prestatario = this.prestatarios.get(libro.codigo);

        if (prestatario !== nombreUsuario){
            return {
                ok: false,
                mensaje: `No puedes devolver "${libro.titulo}" porque está prestado a ${prestatario}.`
            };
        }

        const cola = this.obtenerCola(libro.codigo);

        if (!cola.isEmpty()){
            const siguienteUsuario = cola.dequeue();

            libro.estado = "Prestado";
            this.prestatarios.set(libro.codigo, siguienteUsuario);

            this.historial.agregar({
                tipo: "entrega-reserva",
                libro,
                usuario: siguienteUsuario,
                usuarioAnterior: nombreUsuario,
                fecha: new Date()
            });

            return {
                ok: true,
                mensaje: `"${libro.titulo}" fue devuelto y entregado automáticamente a ${siguienteUsuario}.`
            };
        }

        libro.estado = "Disponible";
        this.prestatarios.delete(libro.codigo);

        this.historial.agregar({
            tipo: "devolucion",
            libro,
            usuario: nombreUsuario,
            fecha: new Date()
        });

        return {
            ok: true,
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
                this.prestatarios.delete(libro.codigo);
                break;

            case "reserva":
                cola.removerUltimo();
                break;

            case "devolucion":
                libro.estado = "Prestado";
                this.prestatarios.set(libro.codigo, accion.usuario);
                break;

            case "entrega-reserva":
                libro.estado = "Prestado";
                cola.devolverAlFrente(accion.usuario);
                this.prestatarios.set(libro.codigo, accion.usuarioAnterior);
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

    obtenerPrestatario(codigo){
        return this.prestatarios.get(codigo) ?? null;
    }
}

export default GestorPrestamos;