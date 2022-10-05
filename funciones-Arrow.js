const sumar = (n1, n2) => console.log(n1+n2);
sumar(1,1);

const cuadrado = numero => numero*numero;
console.log(cuadrado(5));

// ------------------------------
let meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Junio', 'Julio');


meses.forEach(mes => console.log(mes) );

meses.forEach(mes => {
  if (mes == 'Febrero'){
    console.log(`Existe ${mes}`);
  }
});

//---------------------------------
const carrito = [
  {nombre: 'Monitor', precio: 130},
  {nombre: 'Tablet', precio: 50},
  {nombre: 'Procesador', precio: 150},
  {nombre: 'Teclado', precio: 30},
  {nombre: 'Mouse', precio: 25},
];

//some busca  valores en arreglo de objetos
let resultado;
resultado = carrito.some (producto => producto.nombre == 'Mouse');
//some con arrow function

resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);

console.log(resultado);

// filter extra datos de una busqueda
resultado = carrito.filter( producto => producto.precio > 49 );
console.log(resultado);
