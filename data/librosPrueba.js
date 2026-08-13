import Libro from "../models/libro.js";

const librosPrueba = [
    new Libro(
        1011,
        "Fahrenheit 451",
        "Ray Bradbury",
        "Ciencia Ficción",
        "Disponible",
        "En un futuro distópico, los bomberos tienen la misión de quemar libros para evitar que las personas piensen críticamente.",
        "https://covers.openlibrary.org/b/isbn/9781451673319-L.jpg"
    ),
    new Libro(
        1012,
        "Un mundo feliz",
        "Aldous Huxley",
        "Ciencia Ficción",
        "Disponible",
        "Una visión profética de una sociedad futura dominada por la tecnología, el consumismo y el control genético.",
        "https://covers.openlibrary.org/b/isbn/9780060850524-L.jpg"
    ),
    new Libro(
        1013,
        "Neuromante",
        "William Gibson",
        "Ciencia Ficción",
        "Prestado",
        "La obra cumbre del género cyberpunk sobre un hacker contratado para infiltrarse en una poderosa inteligencia artificial.",
        "https://covers.openlibrary.org/b/isbn/9780441569564-L.jpg"
    ),
    new Libro(
        1014,
        "El código Da Vinci",
        "Dan Brown",
        "Misterio",
        "Disponible",
        "El simbolista Robert Langdon investiga un asesinato en el Museo del Louvre que lo lleva a descubrir un secreto religioso oculto durante siglos.",
        "https://covers.openlibrary.org/b/isbn/9780307474278-L.jpg"
    ),
    new Libro(
        1015,
        "Sherlock Holmes: Estudio en escarlata",
        "Arthur Conan Doyle",
        "Misterio",
        "Disponible",
        "La primera novela en la que aparece el legendario detective Sherlock Holmes junto a su inseparable compañero, el Dr. Watson.",
        "https://covers.openlibrary.org/b/isbn/9780486264721-L.jpg"
    ),
    new Libro(
        1016,
        "Diez negritos (Y no quedó ninguno)",
        "Agatha Christie",
        "Misterio",
        "Prestado",
        "Diez personas sin relación previa son invitadas a una isla misteriosa donde comienzan a ser asesinadas una a una.",
        "https://covers.openlibrary.org/b/isbn/9780062073488-L.jpg"
    ),
    new Libro(
        1017,
        "Cien años de soledad",
        "Gabriel García Márquez",
        "Realismo Mágico",
        "Disponible",
        "La historia de la familia Buendía a lo largo de siete generaciones en el ficticio pueblo de Macondo.",
        "https://covers.openlibrary.org/b/isbn/9780307474728-L.jpg"
    ),
    new Libro(
        1018,
        "Don Quijote de la Mancha",
        "Miguel de Cervantes",
        "Clásico",
        "Disponible",
        "Un hidalgo enloquece tras leer demasiados libros de caballería y decide convertirse en caballero andante junto a su fiel escudero Sancho Panza.",
        "https://covers.openlibrary.org/b/isbn/9788424116286-L.jpg"
    ),
    new Libro(
        1019,
        "El principito",
        "Antoine de Saint-Exupéry",
        "Fábula",
        "Prestado",
        "Un aviador varado en el desierto conoce a un pequeño príncipe que viaja de planeta en planeta aprendiendo sobre la vida y la naturaleza humana.",
        "https://covers.openlibrary.org/b/isbn/9780156012195-L.jpg"
    ),
    new Libro(
        1020,
        "Orgullo y prejuicio",
        "Jane Austen",
        "Romance",
        "Disponible",
        "Elizabeth Bennet y Fitzwilliam Darcy deben superar sus propios prejuicios y orgullo para encontrar el amor verdadero.",
        "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg"
    ),
    new Libro(
        1021,
        "The Pragmatic Programmer",
        "Andrew Hunt & David Thomas",
        "Tecnología",
        "Disponible",
        "Uno de los libros de ingeniería de software más influyentes, lleno de consejos prácticos para mejorar el proceso de desarrollo.",
        "https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg"
    ),
    new Libro(
        1022,
        "JavaScript: The Good Parts",
        "Douglas Crockford",
        "Tecnología",
        "Disponible",
        "Un análisis profundo de las mejores características y patrones del lenguaje JavaScript evitando sus partes problemáticas.",
        "https://covers.openlibrary.org/b/isbn/9780596517748-L.jpg"
    ),
    new Libro(
        1023,
        "You Don't Know JS Yet: Get Started",
        "Kyle Simpson",
        "Tecnología",
        "Prestado",
        "Guía esencial para comprender los fundamentos profundos y el funcionamiento interno de JavaScript.",
        "https://covers.openlibrary.org/b/isbn/9798600230230-L.jpg"
    ),
    new Libro(
        1024,
        "Hábitos Atómicos",
        "James Clear",
        "Desarrollo Personal",
        "Disponible",
        "Un marco de trabajo práctico para mejorar cada día un 1% mediante pequeños cambios en la rutina diaria.",
        "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
    ),
    new Libro(
        1025,
        "El hombre en busca de sentido",
        "Viktor E. Frankl",
        "Psicología",
        "Disponible",
        "El psiquiatra Viktor Frankl relata su experiencia en los campos de concentración nazis y explica cómo encontrar propósito en el sufrimiento.",
        "https://covers.openlibrary.org/b/isbn/9780807014295-L.jpg"
    ),
    new Libro(
        1026,
        "Sapiens: De animales a dioses",
        "Yuval Noah Harari",
        "Historia",
        "Prestado",
        "Un recorrido fascinante por la historia de la humanidad, desde la evolución de las primeras especies humanas hasta la era moderna.",
        "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg"
    ),
    new Libro(
        1027,
        "El nombre del viento",
        "Patrick Rothfuss",
        "Fantasía",
        "Disponible",
        "Kvothe, un legendario mago, músico y aventurero, narra en primera persona la historia de su trágica e impresionante vida.",
        "https://covers.openlibrary.org/b/isbn/9780756404741-L.jpg"
    ),
    new Libro(
        1028,
        "Juego de Tronos",
        "George R. R. Martin",
        "Fantasía",
        "Disponible",
        "Casas nobles luchan cruentamente por el control del Trono de Hierro mientras una antigua amenaza despierta en el lejano norte.",
        "https://covers.openlibrary.org/b/isbn/9780553103540-L.jpg"
    ),
    new Libro(
        1029,
        "La sombra del viento",
        "Carlos Ruiz Zafón",
        "Misterio",
        "Disponible",
        "En la Barcelona de posguerra, un joven descubre un libro maldito en el Cementerio de los Libros Olvidados que cambiará su vida.",
        "https://covers.openlibrary.org/b/isbn/9780143034902-L.jpg"
    ),
    new Libro(
        1030,
        "Cracking the Coding Interview",
        "Gayle Laakmann McDowell",
        "Tecnología",
        "Prestado",
        "Contiene 189 preguntas y soluciones de entrevistas técnicas para prepararse adecuadamente en pruebas de programación.",
        "https://covers.openlibrary.org/b/isbn/9780984782857-L.jpg"
    )
];

export default librosPrueba;