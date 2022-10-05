const producto = {
  nombreProducto : "Monitor 20",
  precio : 300.00,
  disponible : true
}

//Destructuring

// const {precio} = producto;
// console.log(precio);
//
// const {nombreProducto} = producto;
// console.log(nombreProducto);

const {nombreProducto, precio} = producto;
console.log(nombreProducto);
console.log(precio);


// Añadir propiedad a onjeto
// producto.imagen = 'imagen.jpg'
// console.log(producto);
//
// delete producto.disponible;
// console.log(producto);
//
// const precioProducto = producto.precio;
// console.log(precioProducto);


// console.log(producto.precio);
// console.log(producto["precio"]);
