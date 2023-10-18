const carousel = document.querySelector(".carousel");

carousel.addEventListener("scroll", () => {
    // Lógica para mostrar solo un libro a la vez en el carrusel.
    const scrollLeft = carousel.scrollLeft;
    const bookWidth = 320; // Ancho de cada libro incluyendo márgenes
    const bookIndex = Math.floor((scrollLeft + bookWidth / 2) / bookWidth);

    // Lógica para resaltar el libro activo.
    const books = document.querySelectorAll(".book");
    books.forEach((book, index) => {
        book.classList.toggle("active", bookIndex === index);
    });
});
