const libros = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Ficción", prestado: false, tematica: "Literatura" },
    { titulo: "Clean Code", autor: "Robert C. Martin", genero: "Programación", prestado: true, tematica: "Informática" },
    { titulo: "El Señor de los Anillos", autor: "J.R.R. Tolkien", genero: "Fantasía", prestado: false, tematica: "Literatura" },
    { titulo: "To Kill a Mockingbird", autor: "Harper Lee", genero: "Ficción", prestado: false, tematica: "Literatura" },
    { titulo: "Clean Code", autor: "Fernando Meza", genero: "No Ficción", prestado: true, tematica: ", Informatica, " },
    { titulo: "El aprendizaje basado en problemas", autor: "Escribano, Alicia.", genero: "No Ficción", prestado: false, tematica: "Educación" },
    { titulo: "La transposición didáctica.", autor: "Chevallard, Yves.", genero: "No Ficción", prestado: true, tematica: "Educación" },
    { titulo: "Los dispositivos para la formación en las prácticas docentes.", autor: "Sanjurjo, Liliana.", genero: "No Ficción", prestado: true, tematica: "Educación" },
    { titulo: "Lengua 4.", autor: "Alonso, María.", genero: "No Ficción", prestado: false, tematica: "Lengua" },
    { titulo: "Ciencias Sociales 6.", autor: "Benadiba Laura.", genero: "No Ficción", prestado: true, tematica: "Sociales" },
    { titulo: "Ciencias sociales bonaerense 5.", autor: "Flores, Fabián Claudio.", genero: "No Ficción", prestado: true, tematica: "Sociales" },
    { titulo: "Enriquecer la enseñanza", autor: "Maggio, María.", genero: "No Ficción", prestado: true, tematica: "Educación" },
    { titulo: "Geometría 3. : Matemática moderna.", autor: "Repetto, Celina.", genero: "No Ficción", prestado: true, tematica: "Matemática" },
    { titulo: "Matemática. : ciclo básico.", autor: "Tajani, Miguel M.", genero: "No Ficción", prestado: false, tematica: "Matemática" },
    { titulo: "El grito manso.", autor: "Freire, Paulo.", genero: "No Ficción", prestado: true, tematica: "Educación" },
    { titulo: "Análisis de mecanismos.", autor: "Sanmiguel Rojas, Enrique.", genero: "No Ficción", prestado: true, tematica: "Física" },
    { titulo: "Termodinámica técnica. : teoría y 222 ejercicios resueltos.", autor: "Juárez Castelló, Manuel Celso.", genero: "No Ficción", prestado: false, tematica: "Física" },
    { titulo: "La matemática escolar. : Las prácticas de enseñanza en el aula.", autor: "Itzcovich, Horacio. ", genero: "No Ficción", prestado: true, tematica: "Matemática" },
    { titulo: "Transitar la formación pedagógica. : dispositivos y estrategias.", autor: "Anijovich, Rebeca. ", genero: "No Ficción", prestado: true, tematica: "Educación" },
    { titulo: "Más alla de la tecnología. : aprendizaje infantil en la era de la cultura digital.", autor: "Buckingham, David.", genero: "No Ficción", prestado: true, tematica: "Tecnología" },
    { titulo: "Métodos de enseñanza. : didáctica general para maestros y profesores.", autor: "Davini, María Cristina.", genero: "No Ficción", prestado: false, tematica: "Educación" },
    { titulo: "El oficio de enseñar. : condiciones y contextos.", autor: "Litwin, Edith.", genero: "No Ficción", prestado: true, tematica: "Educación" },

];

function searchBooks() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    const matchingBooks = libros.filter(libro =>
        libro.titulo.toLowerCase().includes(searchInput) ||
        libro.autor.toLowerCase().includes(searchInput) ||
        libro.tematica.toLowerCase().includes(searchInput) ||
        libro.genero.toLowerCase().includes(searchInput)
    );



    if (matchingBooks.length === 0) {
        resultsDiv.innerHTML = "<p>No se encontraron resultados.</p>";
    } else {
        const ul = document.createElement("ul");
        matchingBooks.forEach(libro => {
            const li = document.createElement("li");
            li.textContent = `Título: ${libro.titulo}, Autor: ${libro.autor}, Género: ${libro.genero}`;
            ul.appendChild(li);
        });
        resultsDiv.appendChild(ul);
    }
}