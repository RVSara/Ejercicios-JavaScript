// 1
const nombres = ["Juan", "Roberto", "Ernesto", "Miriam", "Laura"];

nombres.forEach((nombre) => console.log("Conozco a alguien llamado " + nombre));

// Ejercicio map

let conozco = nombres.map((nombre) => "Conozco a alguien llamado " + nombre);

console.log(conozco);

// 2
const numbers = [1, 9, 3, 8, 5, 7];

numbers.forEach((potencia) => console.log(potencia * 2));

// 3
const valores = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];
let cero = 0;
let positivos = 0;
let negativos = 0;

valores.forEach((i) => {
  if (i === 0) {
    cero++;
  } else if (i > 0) {
    positivos++;
  } else negativos++;
});

console.log("Cantidad de ceros: " + cero);
console.log("Cantidad de positivos: " + positivos);
console.log("Cantidad de negativos: " + negativos);

// 4
let sumPositivos = 0;
let sumNegativos = 0;

positivos = 0;
negativos = 0;

valores.forEach((valor) => {
  if (valor > 0) {
    positivos++;
    sumPositivos += valor;
  } else if (valor < 0) {
    negativos++;
    sumNegativos += valor;
  }
});

let mediaPositivos = sumPositivos / positivos;
let mediaNegativos = sumNegativos / negativos;

console.log(mediaPositivos);
console.log(mediaNegativos);

// 3 en raya
