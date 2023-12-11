// Función para mostrar u ocultar el botón según el desplazamiento de la página
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Función para hacer scroll suave hacia arriba al hacer clic en el botón
function scrollToTop() {
    document.body.scrollTop = 0; // Para navegadores antiguos
    document.documentElement.scrollTop = 0; // Para navegadores modernos
}