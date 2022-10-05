
const producto = {
  nombreProducto : "Monitor 20",
  precio : 300.00,
  disponible : true
}

const medidas = {
  peso : '1kg',
  medidas : '1m'
}

const nuevo_producto = {...producto,...medidas};


console.log(nuevo_producto);
