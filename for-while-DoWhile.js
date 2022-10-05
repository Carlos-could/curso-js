// for(let i=0; i<=12; i++){
//   if (i % 2 == 0) {
//     console.log(`el numero ${i} es par`);
//   }
//   else {
//     console.log(`el numero ${i} es impar`);
//   }
// }

const carrito = [
  {nombre: 'Monitor 20 zoll', precio: 130},
  {nombre: 'Tablet 10 zoll', precio: 50},
  {nombre: 'AMD procesador', precio: 150},
  {nombre: 'Teclado Logitech', precio: 30},
  {nombre: 'Mouse Logitech', precio: 25},
];
//for
for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].nombre);
}


//while
let ii = 0;
while (ii < carrito.length) {
  console.log(carrito[ii].precio);
  ii++;
}

//do while
let numero = 1;
do{
  console.log(numero);
  numero++;
} while (numero<5);
