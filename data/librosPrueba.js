import Libro from "../models/libro.js";

const librosPrueba = [

    new Libro(
        1001,
        "Harry Potter y la piedra filosofal",
        "J. K. Rowling",
        "Fantasía",
        "Disponible",
        "La historia de un joven mago que descubre sus poderes y comienza sus estudios en Hogwarts, donde vivirá grandes aventuras y enfrentará a poderosos enemigos.",
        "https://covers.openlibrary.org/b/id/10521270-L.jpg"
    ),

    new Libro(
        1002,
        "Percy Jackson y el ladrón del rayo",
        "Rick Riordan",
        "Fantasía",
        "Disponible",
        "Percy descubre que es hijo de un dios griego y debe emprender una peligrosa misión para evitar una guerra entre los dioses del Olimpo.",
        "https://covers.openlibrary.org/b/id/7984916-L.jpg"
    ),

    new Libro(
        1003,
        "El Hobbit",
        "J. R. R. Tolkien",
        "Fantasía",
        "Prestado",
        "Bilbo Bolsón abandona la comodidad de su hogar para acompañar a un grupo de enanos en una aventura llena de criaturas fantásticas y tesoros.",
        "https://covers.openlibrary.org/b/id/6979861-L.jpg"
    ),

    new Libro(
        1004,
        "Las Crónicas de Narnia",
        "C. S. Lewis",
        "Fantasía",
        "Disponible",
        "Cuatro hermanos descubren un mundo mágico donde deberán ayudar a Aslan a derrotar las fuerzas del mal y devolver la paz a Narnia.",
        "https://covers.openlibrary.org/b/id/8231996-L.jpg"
    ),

    new Libro(
        1005,
        "Clean Code",
        "Robert C. Martin",
        "Tecnología",
        "Disponible",
        "Un libro fundamental para aprender buenas prácticas de programación, escritura de código limpio y desarrollo de software mantenible.",
        "https://covers.openlibrary.org/b/id/9611996-L.jpg"
    ),

    new Libro(
        1006,
        "Refactoring",
        "Martin Fowler",
        "Tecnología",
        "Disponible",
        "Explica técnicas para mejorar la estructura interna del código sin modificar su comportamiento, facilitando su mantenimiento.",
        "https://covers.openlibrary.org/b/id/8235116-L.jpg"
    ),

    new Libro(
        1007,
        "Design Patterns",
        "Erich Gamma",
        "Tecnología",
        "Prestado",
        "Presenta los patrones de diseño más utilizados para resolver problemas comunes en el desarrollo de software orientado a objetos.",
        "https://covers.openlibrary.org/b/id/240726-L.jpg"
    ),

    new Libro(
        1008,
        "Estructuras de Datos en JavaScript",
        "Loiane Groner",
        "Tecnología",
        "Disponible",
        "Introduce las principales estructuras de datos y algoritmos utilizando JavaScript con ejemplos prácticos y aplicaciones reales.",
        "https://covers.openlibrary.org/b/id/11153212-L.jpg"
    ),

    new Libro(
        1009,
        "1984",
        "George Orwell",
        "Ciencia Ficción",
        "Disponible",
        "Una novela clásica que muestra una sociedad controlada por un régimen totalitario donde la vigilancia y la manipulación dominan la vida cotidiana.",
        "https://covers.openlibrary.org/b/id/7222246-L.jpg"
    ),

    new Libro(
        1010,
        "Dune",
        "Frank Herbert",
        "Ciencia Ficción",
        "Prestado",
        "Paul Atreides deberá enfrentarse a conflictos políticos, religiosos y militares en el desértico planeta Arrakis, el único lugar donde existe la especia más valiosa del universo.",
        "https://covers.openlibrary.org/b/id/8101351-L.jpg"
    )

];

export default librosPrueba;