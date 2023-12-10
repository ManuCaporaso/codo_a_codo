console.log("funciona")


function enviarFormulario() {
    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const correo = document.getElementById("correo").value;
    const genero = document.getElementById("genero").value;
    const edad = document.getElementById("edad").value;
    const profesion = document.getElementById("profesion").value;
    const generoLibro = document.getElementById("generoLibro").value;
    const comentario = document.getElementById("comentario").value;

    // Validar los campos (puedes agregar más validaciones según tus necesidades)
    if (!nombre || !apellido || !fechaNacimiento || !correo || !genero || !edad || !profesion || !generoLibro || !comentario) {
        alert("Por favor, complete todos los campos del formulario.");
        return;
    }

    // Crear un objeto con los datos
    const datosUsuario = {
        nombre,
        apellido,
        fechaNacimiento,
        correo,
        genero,
        edad,
        profesion,
        generoLibro,
        comentario
    };

    // Mostrar los datos en la consola
    console.log("Datos del usuario:", datosUsuario);

    // Guardar los datos en localStorage
    guardarEnLocalStorage(datosUsuario);

    // Puedes agregar lógica adicional según tus necesidades

    alert("Formulario enviado con éxito");
}

function guardarEnLocalStorage(datosUsuario) {
    // Obtener datos existentes en localStorage o inicializar un array vacío
    const datosGuardados = JSON.parse(localStorage.getItem("datosUsuarios")) || [];

    // Agregar los nuevos datos al array
    datosGuardados.push(datosUsuario);

    // Guardar el array actualizado en localStorage
    localStorage.setItem("datosUsuarios", JSON.stringify(datosGuardados));
}

function borrarFormulario() {
    document.getElementById("contactForm").reset();
}
