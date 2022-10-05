const carrito = [
  {nombre: 'Monitor 20 zoll', precio: 130},
  {nombre: 'Tablet 10 zoll', precio: 50},
  {nombre: 'AMD procesador', precio: 150},
  {nombre: 'Teclado Logitech', precio: 30},
  {nombre: 'Mouse Logitech', precio: 25},
];

//forEach - para imprimir en consola o pantalla
carrito.forEach(producto => console.log(producto.nombre) );
console.log('----------------');
//map
carrito.map(producto => console.log(producto.nombre) );
console.log('----------------');
//map es bueno para crear un nuevo arreglo
let nuevoCarrito = carrito.map( producto => producto.nombre );
console.log(nuevoCarrito);
nuevoCarrito.forEach (nuevoProducto => console.log(nuevoProducto) );
