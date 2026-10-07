/* ---------- BOOLEANOS ---------- */

const booleano = true;
console.log(booleano); // true

// Los booleanos solo tienen dos respuestas posibles:
// true (verdadero) o false (falso).

// Puedes obtener su opuesto con un ! delante.

console.log(!booleano); // false

// Son capaces de concatenaciones con cadenas y operaciones matemáticas.

// Observa lo que sale en la consola con Ctrl + Shift + P.

console.log("Prueba" + booleano); // Pruebatrue
console.log(booleano + 4); // 5 (true tiene un valor de 1 y false tiene un valor de 0)

// Se utilizan para comparaciones y para funciones
// que funcionan como un interruptor.

/* ---------- COMPARACIONES ---------- */

const uno = 1;
let dos = "2";

// Recuerda que un solo = es una asignación. Queremos comparar.

console.log(dos == uno + uno); // true

// Dos iguales hace una comparación de contenido (valores).

console.log(dos === uno + uno); // false

// Tres iguales compara contenido Y tipo.
// dos es una cadena y uno es un número, por eso da false.

console.log(typeof dos); // string (cadena)

// Vamos a cambiarlo:

dos = Number(dos);
console.log(dos); // 2
console.log(typeof dos); // number

console.log(dos === uno + uno); // true

// La ! también puede usarse en comparaciones.
// != comprueba que sus valores NO sean iguales.

console.log(dos != uno); // true (son diferentes)

// !== comprueba contenido y tipo.

console.log(uno !== "1"); // true (son diferentes)
// uno es un número, "1" es una cadena.

/* ---------- IF / ELSE ---------- */

// Los booleanos son compatibles con símbolos de < (menor que),
// > (mayor que), <= (menor o igual) y >= (mayor o igual).

// Se usan mucho en condicionales,
// para ejecutar códigos distintos según sus condiciones.
// Al hablar de "condiciones", ten en cuenta lo que significa:
// solo funciona en términos booleanos de true o false.

const edad = 17;

// Entre paréntesis se establece una condición de true o false.
if (edad >= 18) {
  console.log("¡Felicidades! Eres mayor de edad.");
} else if (edad < 0) {
  // else if plantea un caso alternativo con otra condición.
  console.log("¿Qué haces aquí? ¡Aún no has nacido!");
} else {
  // else contempla cualquier otro caso que no cubre ninguno de los otros.
  console.log("Menor de edad - ten cuidado en internet.");
}

// Un if/else ejecutará la primera opción en la que la condición se cumpla.
// Prueba a modificar el número para la edad y observa los resultados.

/* ---------- TERNARIOS ---------- */

// Un ternario resume un if/else en una sola línea de la siguiente manera:

// condición ? qué pasa si se cumple (if) : qué pasa si no se cumple (else)
console.log(dos === uno + uno ? "todo está bien" : "algo falla"); // todo está bien

/* ---------- OPERADORES LÓGICOS Y COMBINADORES ---------- */

// Los operadores lógicos evalúan dos o más condiciones en paralelo.
// Los que más utilizamos son && y || .

const soySimpatico = true;
const tengoBuenGusto = true;
const soyRico = false;
const tengoPoderes = false;

// && (doble ampersand) significa AND - en español, Y.
// Pide que TODAS las condiciones se cumplan a la vez.

console.log(tengoBuenGusto && soySimpatico); // Si todos son true, da true.
console.log(soySimpatico && tengoPoderes); // Si hay uno o varios false, da false.

// || significa OR - en español, O.
// Pide que, como mínimo, una condición se cumpla. No son excluyentes entre sí.

console.log(tengoBuenGusto || soyRico); // Si hay uno o varios true, da true.
console.log(soyRico || tengoPoderes); // Si todos son false, da false.

// Las cadenas y los números se consideran "true" - existen.
// El número 0 y las variables nulas o indefinidas se consideran "false".

console.log(soySimpatico && "prueba"); // prueba - reproduce el último "true".
console.log(0 && tengoPoderes); // 0 - reproduce el primer "false".

console.log(-12 || tengoBuenGusto); // -12 - reproduce el primer "true".
console.log(soyRico || null); // null - reproduce el último "false".

/* ---------- MÚLTIPLOS Y DIVISORES CON % ---------- */

// Antes de continuar, aprenderemos sobre otro operador matemático - %.
// Que no te engañe - NO ES UN PORCENTAJE.
// Es el resto de una división - es decir, lo que sobra al dividir
// un número por otro de la forma tradicional.

console.log(5 / 2); // 2.5
// Una división con / da el resultado exacto con decimales,
// o lo que es lo mismo: 2.5 * 2 = 5
// En una división exacta entre 5 y 2, no podemos obtener un número sin decimales.

console.log(5 % 2); // 1
// El % nos obliga a multiplicar el divisor (2) solamente con números enteros.
// 2 * 1 = 2; seguimos
// 2 * 2 = 4; seguimos
// 2 * 3 = 6; !! STOP !! 6 se pasa de 5
// Entonces, % selecciona el resultado por debajo de 5 más cerca de 5 y
// reproduce la diferencia, en este caso 5 - 4 = 1
// La diferencia (en este caso 1) siempre tiene que ser menor
// que el divisor (en este caso 2).

// Es muy común utilizar el % para saber si un número es divisible por otro.

console.log(8 % 4 === 0); // true (8 es múltiplo de 4)
// Si el resto (%) entre dos números da 0, significa que dividir
// el primero por el segundo da un número entero, sin decimales.

console.log(8 / 4); // 2
console.log(4 * 2); // 8

/* ---------- IF / ELSES AVANZADOS ---------- */

// Probemos a aplicar los && y los || en if/elses.

const variable = 6;

if (variable >= 0 || variable <= dos) {
  console.log("¿Qué pasa?"); // ¿Qué pasa?
} else if (variable > dos && variable % 2 === 0) {
  console.log(dos); // "x % 2 === 0" comprueba si el número es par
} else {
  console.log("Inválido");
}

// Cuando dos ifs en un mismo if/else son true, se ejecutará
// la primera condición que se cumpla leyendo de arriba a abajo.

console.log(variable > dos && variable % 2 === 0); // true
console.log(variable >= 0 || variable <= dos); // true

// Mayor que 0 o menor que 2 incluye cualquier número, así que siempre
// hace console.log("¿Qué pasa?") aunque tengamos un número par mayor que dos.

// Queremos que la condición más restrictiva o excepcional esté
// al principio del todo, como en el ejercicio de FizzBuzz.

// Para corregir este if/else, podríamos cambiar el orden
// o evitar que se solapen, bien cambiando el || por un &&
// para que cuente solo los valores entre el 0 y el 2,
// o bien eliminando la condición "variable >= 0" para que
// solo cuente los números por debajo de 2 (incluyendo negativos).

/* ---------- SWITCH ---------- */

// switch es otro tipo de condicional.

const dia = "Sábado";

switch (dia) {
  // Entre paréntesis hay que especificar a qué variable va atada.
  case "Viernes":
    // Con case, defines lo que pasa cuando esa variable tiene un valor concreto.
    console.log("¡A las 15:30 soy libre!");
    break; // break; es necesario para interrumpir la secuencia y que
  // el código no se siga ejecutando por sí solo al encontrar una coincidencia.
  case "Sábado":
    console.log("¿Quedamos a tomar algo?");
    break; // Si borrásemos este break, también saldría el Domingo y el default.
  case "Domingo":
    console.log("Voy a visitar a mis abuelos.");
    break;
  default: // Como else, contempla cualquier otro caso fuera de los anteriores.
    console.log("Tengo que ir a clase.");
}

// La diferencia está en que if/else puede usar
// más de una variable en sus condiciones (como en el if/else avanzado),
// mientras que switch es más óptimo para considerar
// una lista extensa de valores para una única variable.
