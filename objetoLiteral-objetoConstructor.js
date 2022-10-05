//Object Literal
const producto = {
  nombre : 'Monitor',
  precio : 500
}

//Object Constructor - se escribe con Mayuscula
function Producto(nombre, precio){
  this.nombre = nombre;
  this.precio = precio;
}

const producto2 = new Producto('Monitor de 39"', 800);
const producto3 = new Producto('Laptop Acer"', 999);

console.log(producto2);
console.log(producto3);
