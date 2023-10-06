const libros = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Ficción", prestado: false, tematica: "Literatura" },
    { titulo: "Clean Code", autor: "Robert C. Martin", genero: "Programación", prestado: true, tematica: "Informática" },
    { titulo: "El Señor de los Anillos", autor: "J.R.R. Tolkien", genero: "Fantasía", prestado: false, tematica: "Literatura" },
    { titulo: "To Kill a Mockingbird", autor: "Harper Lee", genero: "Ficción", prestado: false, tematica: "Literatura" },
    { titulo: "Clean Code", autor: "Fernando Meza", genero: "No Ficción", prestado: true, tematica: ", Informatica, " },

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