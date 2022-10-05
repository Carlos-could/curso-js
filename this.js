// this hace referencia a las propiedades del objeto

const reservacion = {
  nombre : 'Carlos',
  apellido : 'Moran',
  total : 500,
  pagado : true,
  informacion : function () {
    console.log(`El cliente ${this.nombre} ${this.apellido} tiene que pagar ${this.total} €`);
  }
}
reservacion.informacion();


// this NO funciona con Arrow-Function, aqui this busca en la ventana
const reservacion2 = {
  nombre : 'Carlos',
  informacion : () => console.log(`El cliente ${this.nombre} tiene que pagar en $`),
}
reservacion2.informacion(); // el resultado en la consola del navegador es Undefined
