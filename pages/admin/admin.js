function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        alert("Bienvenido a 23528 Books");
        window.location.href = "../productos/productos.html"; // Reemplaza con la URL de la otra página
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
