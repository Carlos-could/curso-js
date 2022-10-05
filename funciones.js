//Declaracion de funcion
//funciona si 1ro se llama y despues se declara
sumar();
function sumar() {
  console.log( 2+3);
}


//Expresion de la funcion
// NO funciona si 1ro se llama y despues se declara
const dividir = function () {
  console.log(80/2);
}
dividir();

//IIFE
//sirve para que no se mezclen variables y funciones de otros archivos
//cuando se llama a la variable del otro archivo

( function () {
  console.log(40*40);
} ) ();
