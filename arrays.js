const numeros = [1,2,3,4];
let letras = ['a','b','c'];

let meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');

const arreglo = [ [1,2,3,4],'Hola', 10, true, null, {nombre:'Carlos', edad:47} ];

// console.log(numeros);
// console.log(letras);
//
// console.table(numeros);
// console.table(letras);

// console.table(meses);
// console.table(arreglo);

numeros.forEach(function(numero) {
  console.log(numero);
} );
