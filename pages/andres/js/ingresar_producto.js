function guardar() {
    let nombre_ingresado = document.getElementById("nombre").value //input
    let correo_ingresado = document.getElementById("correo").value 
    let titulo_ingresado = document.getElementById("titulo").value 
    let imagen_ingresada = document.getElementById("imagen").value 

    console.log(nombre_ingresado,correo_ingresado,titulo_ingresado,imagen_ingresada);
    // Se arma el objeto de js 
    let datos = {
        nombre: nombre_ingresado,
        correo:correo_ingresado,
        titulo:titulo_ingresado,
        imagen:imagen_ingresada
    }
    console.log(datos);
    
    let url = "https://23528books.pythonanywhere.com/registro"
    var options = {
        body: JSON.stringify(datos),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Sugerencia de compra creada")
            // Devuelve el href (URL) de la página actual
            window.location.href = "../index.html";  
            
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}