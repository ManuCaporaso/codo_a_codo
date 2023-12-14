//Resitstro de un nuevo usuario

let userName = document.getElementById("usernameRegistro")

let entradaEmail = document.getElementById("emailRegistro")

let entradaClave = document.getElementById("claveRegistro")

let entradaRepetir = document.getElementById ("repetirClave")

let boton = document.getElementById ("botonRegistro")

boton.addEventListener("click", () => {
    
    let nombre = userName.value;
    let email = entradaEmail.value;
    let clave = entradaClave.value;
    let clave2 = entradaRepetir.value;
    let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/
    let validClave = /^[A-Za-z]\w{5,14}$/

    if (nombre !=="" ) {
        if (validEmail.test(email)) {
            if (clave == clave2){

                if(validClave.test(clave)){
                    localStorage.setItem ("nombre", nombre)
                    localStorage.setItem("email", email)
                    localStorage.setItem ("clave", clave)
                    window.location = "cande.html";
                }
                else {
                    alert("Lo siento, tu navegador no soporta Web Storage. Por favor, actualiza tu navegador.");
                }   
            }
            else {
                postMessage("Las contraseñas no coinciden, reviselas.")
            }
            
        }
        else {
            postMessage("Correo electronico invalido, revisalo")
        }
    } 
    else {
        postMessage ("Complete su nombre primero.")
    }

})


