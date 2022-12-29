//onscroll
/*document.addEventListener('DOMContentLoaded', function() { // Este se ejecuta cuando el HTML ha sido descargado pero no espera por CSS o imagenes...
    console.log('4');
});*/ 
 const btEnviar = document.querySelector(".boton--primario");
 btEnviar.addEventListener("click", function(e){
 console.log(e);
    e.preventDefault();
    console.log("has echo click");
 });