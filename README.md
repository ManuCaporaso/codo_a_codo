# codo_a_codo
Proyecto final de curso codo a codo 
header{
    background-color: rgba(239, 100, 140, 1);
    display: inline-block;
    height: 15vh;
    width: 100vw;
    font-size: 1.5vw;
    text-align: center;
    padding-top: 2vh;
    
}
.barra{
    font-family: "noto light";
    text-decoration: none;
    color:rgba(239, 239, 206, 1);
    padding-left: 0.75vw;
    padding-right: 0.75vw;
}

body{
    background-color: rgba(239, 239, 206, 1);
}
/* Estilo de "iniciar sesion" y "registrarse" */
.title { 
    text-align: center;
    font-size: 70; /*no puedo cambiar el tamaño y no se por que*/
    font-family: 'noto bold';
    margin-top: 3vh;
    margin-bottom: 2vh;
    color: rgba(239, 239, 206, 1);

}

/* Estilo contenedor del formulario */
fieldset{
    background-color: rgba(48, 48, 48, 1);
    text-align: center;
    width: 22vw;
    height: 50vh;
    /* float:none; */
    border-radius: 15%;
    border-color: grey;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15vh;
    flex-shrink: 0;
    


}
input{
    background-color: rgba(239, 239, 206, 1);
    border-radius: 35%;
    height: 5vh;
}
label {
    text-align: left;
    color:rgba(239, 239, 206, 1);
    margin-top: 5vh;
}
.registro{
    text-align: center;
    margin-bottom: 20vh;
}


footer{
    background-color: rgba(35, 125, 130, 1);
    max-height: 30vh;
    text-align: center;

}





grid

div html
<section class="container">
        <div class="item header">Header</div>
        <div class="item contenido">contenido</div>
        <div class="item footer">footer</div>
    </section>
    




.container {
    display: grid;
    grid-template: 25vh 1fr 25vh / 25vw 1fr 25vw; 
    grid-template-areas: "header header header"
    "contenido"
    "footer footer footer";
}

.header {
    grid-area: header;
    


}
.contenido {
    grid-area: contenido;

}

.footer {
    grid-area: footer;
}