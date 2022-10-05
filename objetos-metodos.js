
//"use strict"; // corrrer JS en modo estricto
const producto = {
  nombreProducto : "Monitor 20",
  precio : 300.00,
  disponible : true
}

Object.seal(producto); // con seal puedes modificar, con freeze no puedes

producto.imagen = 'imagen.jpg';
producto.precio = 401;
console.log(producto);
console.log(Object.isFrozen(producto));
