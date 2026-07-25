import Libro from "../models/libro.js";
const librosPrueba = [
    new Libro(
        1005,
        "Harry Potter y la Piedra Filosofal",
        "J.K. Rowling",
        "Fantasía",
        "Disponible",
        "assets/img/harry-potter.jpg"
    ),

    new Libro(
        1002,
        "Don Quijote de la Mancha",
        "Miguel de Cervantes",
        "Novela",
        "Disponible",
        "assets/img/don-quijote.jpg"
    ),

    new Libro(
        1010,
        "Cien años de soledad",
        "Gabriel García Márquez",
        "Novela",
        "Prestado",
        "assets/img/cien-anos.jpg"
    ),

    new Libro(
        1001,
        "El Principito",
        "Antoine de Saint-Exupéry",
        "Infantil",
        "Disponible",
        "assets/img/principito.jpg"
    ),

    new Libro(
        1003,
        "El Hobbit",
        "J.R.R. Tolkien",
        "Fantasía",
        "Disponible",
        "assets/img/hobbit.jpg"
    ),

    new Libro(
        1008,
        "Clean Code",
        "Robert C. Martin",
        "Tecnología",
        "Disponible",
        "assets/img/clean-code.jpg"
    ),

    new Libro(
        1015,
        "Estructuras de Datos",
        "Mark Allen Weiss",
        "Tecnología",
        "Disponible",
        "assets/img/estructuras.jpg"
    ),

    new Libro(
        1006,
        "Percy Jackson",
        "Rick Riordan",
        "Fantasía",
        "Prestado",
        "assets/img/percy.jpg"
    )
];

export default librosPrueba;