const numeros = [1,2,3,4];

numeros[5]=5;
numeros.push(70,80);
numeros.unshift(100);
numeros.pop(); //elimina el ultimo elemento
numeros.shift(); //elimina el primer elemento
// console.table(numeros);


let meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');
// meses.splice(2,2);
// console.table(meses);

const nuevoListaMeses = [...meses, 'Junio'];
console.table(nuevoListaMeses);
