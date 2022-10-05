function sumar(a=5,b=2) {
  console.log(a+b);
}

sumar(1,2);
sumar(11,22);
sumar(11,2);
sumar(1,22);
sumar(1);

console.log("-----------funcion con return");
let total = 0;
function carrito(precio) {
  return total += precio;
}

carrito (2);
carrito (2);
carrito (2);
carrito (10);

console.log(total);

function totalPagar(x ) {
  return 1.15 * x;
}

const totalFactura = totalPagar(total);

console.log(totalFactura);
