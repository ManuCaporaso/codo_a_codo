//Crear una estructura que verifique el usuario y contraseña ingresada.
//Crear una estructura que verifique los datos ingresados para registrarse y crearse un usuario. Una vez verificado, guardar la informacion para posteriores inicios.

let mensajeBienvenida = document.getElementById ("mensaje")
let entradaEmail = document.getElementById ("email")
let entradaClave = document.getElementById ("clave")
let botonIngresar = document.getElementById ("ingresar")

let emailGuardado = localStorage.getItem("email")
let claveGuardada = localStorage.getItem ("clave")



botonIngresar.addEventListener ("click", () => {
    
    if (emailGuardado && claveGuardada) {
        mensajeBienvenida.textContent = 'Ha iniciado sesion como ${userName}';
        window.location = "home.html";}
    else {
        postMessage('Usted no tiene sesion aun, registrese')
    }
    
})