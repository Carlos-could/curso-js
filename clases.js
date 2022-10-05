class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  formatearProducto(){
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
  }
}

const producto1 = new Producto('Monitor', 50);
console.log(producto1.precio);
console.log(producto1.formatearProducto());

class Libro extends Producto {
  constructor (nombre, precio, isbn){
    super(nombre, precio);
    this.isbn = isbn;
  }
  formatearProducto(){
    return  `${super.formatearProducto()} y su isbn es ${this.isbn}`;
  }
}

const libro = new Libro('El medico', 55, 6546456456);
console.log(libro.formatearProducto());
