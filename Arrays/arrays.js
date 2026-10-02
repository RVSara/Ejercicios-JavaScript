// 1
const nombres = ["Juan", "Roberto", "Ernesto", "Miriam", "Laura"];

for (let nombre of nombres) {
  const conozco = "Conozco a alguien llamado " + nombre;
  console.log(conozco);
}

// for (let i = 0; i < nombres.length; i++) es lo mismo que
/* for (let i in nombres) {
  const conozco = "Conozco a alguien llamado " + nombres[i];
  console.log(conozco);
} */

// 2
const toArray = (...num) => console.log(num);

toArray(5, 3, 9);

// 3
const numbers = [1, 9, 3, 8, 5, 7];

for (let potencia of numbers) {
  console.log(potencia * 2);
}

// 4
const getFirstElement = (array) => console.log(array[0]);

getFirstElement([1, 2]);

// 5
const setFirstElement = (array, other) => {
  array[0] = other;
  return console.log(array);
};

setFirstElement([1, 2], 3);

// 6
const getLastElement = (array) => console.log(array[array.length - 1]);

getLastElement([1, 2]);

// 7
const valores = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];

let cero = 0;
let positivos = 0;
let negativos = 0;

for (i of valores) {
  if (i === 0) {
    cero++;
  } else if (i > 0) {
    positivos++;
  } else negativos++;
}

console.log("Cantidad de ceros: " + cero);
console.log("Cantidad de positivos: " + positivos);
console.log("Cantidad de negativos: " + negativos);

// 8
let sum = 0;

for (let i of valores) {
  sum += i;
}

let media = sum / valores.length;

console.log(media);

// No es lo que pedía el ejercicio. Quiere la media de los positivos y los negativos por separado.

// 9
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
const myData = arr[2][1]; // Modificar únicamente esta línea para acceder al 8 del array bidimensional
console.log(myData);

// TRIVIA
const trivia = [
  "¿El fuego quema?-true",
  "¿La tierra es plana?-false",
  "¿JavaScript es fácil?-false",
  "¿Te apetece tomar un helado?-true",
];
const n = Math.floor(Math.random() * trivia.length);
const pregunta = trivia[n];
const textoPregunta = pregunta.slice(0, pregunta.indexOf("-"));
const respuesta = pregunta.slice(pregunta.indexOf("-") + 1);
const si = ["si", "sí", "true"];
const no = ["no", "false"];
const boolean =
  respuesta == si[si.length - 1] || respuesta == no[no.length - 1];

console.log(boolean);
console.log(
  "Si aciertas esta pregunta, ganarás muchísimo dinero. ¡Comencemos!"
);
const correcto = "sí";
let concurso = () => {
  if (boolean) {
    for (i of si) {
      if (correcto.toLowerCase() == i) {
        return console.log(
          "¡Felicidades! Habla con el profesor para recibir tu premio."
        );
      }
    }
    for (i of no) {
      if (correcto.toLowerCase() == i) {
        return console.log(
          "¡Felicidades! Habla con el profesor para recibir tu premio."
        );
      }
    }
  } else
    return console.log("¡Te has equivocado! Actualiza e inténtalo de nuevo.");
};

concurso();
