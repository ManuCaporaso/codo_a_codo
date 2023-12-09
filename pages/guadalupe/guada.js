console.log("funciona")
var nombre = document.getElementById("nombre")
nombre =  /^[A-Za-z\s]+$/.test(nombre);
console.log(nombre)


var nombre = document.getElementById("nombre").value

var apellido = document.getElementById("apellido").value

var fecha_nac = document.getElementById("fn").value

var genero = document.getElementById ("genero").value

var edad = document.getElementById ("edad").value

var profesion = document.getElementById ("profesion").value

var lista_genero = document.getElementById ("browsers").value

var comentario = document.getElementById ("comentario").value

var email = document.getElementById ("email").value

var boton = document.getElementById ("enviar")


boton.addEventListener("click", () => {

    if (nombre == "") {
        console.log ("Complete su nombre");
        return false;
    }

    if (apellido == "") {
        postMessage ("Complete su apellido")
        return false;
    }

    else {
        var nombre_apell_valid =  /^[A-Za-z\s]+$/;
        var email_valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/.test(email)
        if (!nombre_apell_valid.test(nombre)){
            postMessage ("Nombre invalido, reingreselo")
        }
        else if (!nombre_apell_valid.test(apellido))
            postMessage ("Apellido invalido, reingreselo")
        else if (!email_valid.test(email)){
            postMessage ("Correo electronico invalido, reingreselo")
        }
    }

    })
