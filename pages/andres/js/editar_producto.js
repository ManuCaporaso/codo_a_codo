function modificar() {
    let id = document.getElementById("id").value
    let nombre_ingresado = document.getElementById("nombre").value
    let correo_ingresado = document.getElementById("correo").value 
    let titulo_ingresado = document.getElementById("titulo").value 
    let imagen_ingresada = document.getElementById("imagen").value 

    let datos = {
        nombre: nombre_ingresado,
        correo:correo_ingresado,
        titulo:titulo_ingresado,
        imagen:imagen_ingresada
    }

    console.log(datos);

    let url = "https://23528books.pythonanywhere.com/update/"+id
    var options = {
        body: JSON.stringify(datos),
        method: 'PUT',
        
        headers: { 'Content-Type': 'application/json' },
        // el navegador seguirá automáticamente las redirecciones y
        // devolverá el recurso final al que se ha redirigido.
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Sugerencia de compra modificada")

            //Puedes utilizar window.location.href para obtener la URL actual, redirigir a otras páginas
           window.location.href = "../index.html";
          
        })
        .catch(err => {
            this.error = true
            console.error(err);
            alert("Error al Modificar")
        })      
}