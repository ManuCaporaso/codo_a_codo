//CARROUSEL DE LIBROS

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


//CARROUSELL DE NOVEDADES
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Cambiar las imágenes automáticamente cada 5 segundos
setInterval(() => {
    plusSlides(1);
}, 5000);

//Ocultar iFrame

function ocultar() {
    var x = document.getElementById("esconder");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }