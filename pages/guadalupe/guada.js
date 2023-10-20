console.log("funciona")
var nombre = document.getElementById("nombre")
nombre =  /^[A-Za-z\s]+$/.test(nombre);
console.log(nombre)