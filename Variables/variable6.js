let a = 5;
let b = 7;
// ... aquí y sólo aquí añadiremos las líneas de codigo
let c = a;
a = b;
b = c;
console.log('a: ', a); //Debería mostrar 7
console.log('b: ', b); //Debería mostrar 5