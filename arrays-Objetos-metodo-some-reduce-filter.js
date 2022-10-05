
const carrito = [
  {nombre: 'Monitor 20 zoll', precio: 130},
  {nombre: 'Tablet 10 zoll', precio: 50},
  {nombre: 'AMD procesador', precio: 150},
  {nombre: 'Teclado Logitech', precio: 30},
  {nombre: 'Mouse Logitech', precio: 25},
];

//some ideal para arreglo de objetos
let resultado;
resultado = carrito.some (function (producto) {
  return producto.nombre == 'Mouse Logitech'
});
//some con arrow function
resultado = carrito.some (producto => producto.nombre === 'Teclado Logitech' );
console.log(resultado);

// Reduce para suma valores
resultado = carrito.reduce(function (total, producto) {
  return total + producto.precio;
}, 0);
// reduce con arrow function
resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);


// filter extra datos de una busqueda
resultado = carrito.filter(function (producto) {
  return producto.precio > 49;
});

//filter con arrow function
resultado = carrito.filter (producto => producto.precio >50);
console.log(resultado);
