/* Declara una constante ‘i’ de tipo entero y asígnale un valor. Mostrar un mensaje indicando si el valor de ‘i’ es positivo o negativo, si es par o impar, si es múltiplo de 5, si es múltiplo de 10 y si es mayor o menor que 100. Consideraremos el 0 como positivo. */

const i = 50;
const multiplo5 = i / 5;
const multiplo10 = i / 10;

if(i >= 0){
  console.log(i + ' es positivo');
}else {
  console.log(i + ' es negativo');
}

if(i % 2 == false){
  console.log(i + ' es par');
}else {
  console.log(i + ' es impar');
}

if(i % 5 == false){
  console.log(i + ' es múltiplo de 5');
}else {
  console.log(i + ' no es múltiplo de 5');
}

if(i % 10 == false){
  console.log(i + ' es múltiplo de 10');
}else {
  console.log(i + ' no es múltiplo de 10');
}

if(i >= 100){
  console.log(i + ' es mayor que 100');
}else {
  console.log(i + ' es menor que 100');
}