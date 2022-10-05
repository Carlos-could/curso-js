let meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Junio', 'Julio');

//foreach
console.log('Lista con foreach----------------------');
function mifuncion(mes) {
  console.log(mes);
}
meses.forEach(mifuncion);

console.log('Buscar con foreach----------------------');
function existe(mes) {
  if (mes == 'Febrero'){
    console.log(`Existe ${mes}`);
  }
}
meses.forEach(existe);

//includes
console.log('Buscar con includes----------------------');
console.log(meses.includes('Febrero'));

if (meses.includes('Febrero')) {
  console.log('Existe Febrero');
}
