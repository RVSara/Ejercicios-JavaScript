/* ---------- LO BÁSICO ---------- */

let variable = 5;

// En orden:

// 1. Declaración - Para permitir que un elemento exista por primera vez.
// Con let puedes modificar valores, con const el valor es fijo.

// 2. Variable - Un elemento cualquiera al que le asignas un valor.
// Hay cuatro tipos de variables: de cadena, de número, booleano o de objeto.
// El nombre se lo pones tú, siempre en camelCase sin espacios y sin tildes.

let nuevaVariable; // Con let, se pueden declarar variables vacías,
nuevaVariable = "3"; // y asignarles un valor más adelante.
// Ya hicimos el let arriba, así que no necesita declararse otra vez.

// const variableInvalida; // Error. El valor de un const se asigna al momento de declarar.

// 3. Asignación - Representado con un único símbolo = . Para darle un valor a algo.
// No confundir con == (equivalencia, resulta en un "true" o un "false"),
// ni con === (coincidencia exacta de contenido y de tipo).

// 4. Valor - El contenido de una variable.

const numero = 2; // Los números se ponen tal cual.
const booleano = true; // Los booleanos igual. Son elementos de sí/no; este o el otro.
const cadena = "¿Qué tal?"; // Las cadenas entre comillas. Compatible con tildes y símbolos.

/* ---------- USANDO VARIABLES ---------- */

console.log(variable); // 5

// Esto es una llamada.
// Muestra el cálculo interno que hace tu código JavaScript.

// Haz Ctrl + Shift + P y selecciona Quokka.js: Run (o Ejecutar) automatically.
// El resultado se reproduce en la consola del archivo, que,
// en una web abierta en navegador, se accede con Ctrl + Shift + I y luego Console.

console.log(variable + numero); // 7
//            5      +   2

// Fíjate en el espaciado:
// para comandos que se asemejan a funciones, el paréntesis va pegado
// a su nombre como console.log(), mientras que elementos separados se
// aislan con un espacio para que el programa (y tú) pueda leerlo bien.

// VisualStudio Code señala con colores las aperturas y cierres de paréntesis,
// comillas, corchetes [] y llaves {} para que te acuerdes de cerrar lo que abras.

/* ---------- OPERACIONES MATEMÁTICAS ---------- */

// Para variables que son números, puedes usar símbolos como en una calculadora.
// + : sumar
// - : restar
// * : multiplicar
// / : dividir
// ** : potencia (las veces que mutiplicas un número por sí mismo, tipo x²)

console.log(2 ** (4 - 1)); // 8
//            2 **    3   ==   2 * 2 * 2

// Agrupa operaciones con paréntesis como con las matemáticas convencionales.

console.log(nuevaVariable + numero); // 32

// ¿Por qué no da 5?

console.log(numero); // 2
console.log(nuevaVariable); // 3

// Al contrario que los demás, sale en verde en la consola.

// Si descansas el cursor del ratón sobre nuevaVariable,
// te dice qué valor tiene y qué tipo de variable es.

// El valor de nuevaVariable está entre comillas,
// así que NO ES UN NÚMERO, es una cadena.

console.log(typeof numero); // number
console.log(typeof nuevaVariable); // string (cadena)

// Con cadenas, en lugar de hacer una suma, el + une los elementos.
// Lo veremos en la siguiente sección.

console.log(nuevaVariable - numero); // 1

// Otros operadores extraen el 3 de nuevaVariable, pero si fuese un texto...

console.log("abc" / numero); // NaN (Not a Number)
// No acepta operaciones matemáticas.

/* ---------- CONCATENACIÓN ---------- */

let nombre = "Pablo";
let apellido = "Monteserín";
console.log(nombre + apellido); // PabloMonteserín

// Esto es una concatenación.

// Tenemos que incluir el espacio entre las dos frases para que no quede pegado.

let nombreCompleto = nombre + " " + apellido; // Pablo Monteserín

// Se pueden combinar variables con elementos sin nombrar.

let presentacion = `${cadena} Me llamo ${nombreCompleto}.`;
// Utiliza la tilde grave `

// console.log(Presentacion); // Presentacion is not defined

// ¡Ups!
// JavaScript es sensible a mayúsculas y minúsculas, así que, si algo no funciona
// como debería, revisa que la coincidencia sea exacta antes de cambiar el código.

console.log(presentacion); // ¿Qué tal? Me llamo Pablo Monteserín.

/* ---------- MODIFICANDO VARIABLES ---------- */

let saludo = "Hola";
console.log(saludo); // Hola

saludo += " " + nombre;
console.log(saludo); // Hola Pablo

// Observa cómo el + antes del = (+=) añade contenido nuevo,
// continuando o expandiendo su valor anterior.

// Aplicado a números, sirve para aumentar su valor.

variable = 5;
variable += 2; // se añade 2 a sí misma
console.log(variable); // 7

// Aquí tienes otras posibles fórmulas para modificar números:

console.log(variable++); // Sigue siendo 7, pero aplica el aumento
console.log(variable); // en la línea siguiente. Aquí ya es 8.

console.log(++variable); // 9. Aplica en la misma línea.

// Los ++ solo pueden ir de uno en uno.

console.log(--variable); // 8

// También funciona con -- y con -=.

variable = variable - 3; // se resta 3 a sí misma y se asigna el nuevo valor
// 8          8     - 3
console.log(variable); // 5

/* ---------- BOOLEANOS ---------- */

console.log(booleano); // true

// Los booleanos solo tienen dos respuestas posibles:
// true (verdadero) o false (falso).

// Puedes obtener su opuesto con un ! delante.

console.log(!booleano); // false

// Son capaces de concatenaciones con cadenas y operaciones matemáticas.

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
// Antes de un =, comprueba que sus valores NO sean iguales.

console.log(dos != uno); // true (son diferentes)

// El doble == con exclamación antes comprueba contenido y tipo.

console.log(uno !== "1"); // true (son diferentes)
// uno es un número, "1" es una cadena.

/* ---------- IF / ELSE ---------- */

// Los booleanos son compatibles con símbolos de < (menor que),
// > (mayor que), <= (menor o igual) y >= (mayor o igual).

// Se usan mucho en condicionales,
// para ejecutar códigos distintos según sus condiciones.

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

// Las cadenas y los números se consideran true - existen.
// El número 0 y las variables nulas o indefinidas se consideran false.

console.log(soySimpatico && "prueba"); // prueba - reproduce el último true.
console.log(0 && tengoPoderes); // 0 - reproduce el primer false.

console.log(-12 || tengoBuenGusto); // -12 - reproduce el primer true.
console.log(soyRico || null); // null - reproduce el último false.

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

variable = 6;

if (variable >= 0 || variable <= dos) {
  console.log(saludo); // Hola Pablo
} else if (variable > dos && variable % 2 === 0) {
  console.log(dos); // "x % 2 === 0" comprueba si el número es par
} else {
  console.log("Inválido");
}

// Cuando dos ifs en un mismo if/else son true, se ejecutará
// la primera condición que se cumpla leyendo de arriba a abajo.

console.log(variable > dos && variable % 2 === 0); // true
console.log(variable >= 0 || variable <= dos); // true

// Mayor que 0 o menor que 2 incluye prácticamente cualquier número, así que
// siempre hace console.log(saludo) aunque tengamos un número par mayor que dos.

// En un ejemplo real, queremos que la condición más restrictiva
// o excepcional esté al principio del todo.

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
    // Con case, defines lo que pasa cuando la variable tiene un valor concreto.
    console.log("¡A las 15:30 soy libre!");
    break; // break; es necesario para interrumpir la secuencia
  // y que el código no se siga ejecutando por sí solo.
  case "Sábado":
    console.log("¿Quedamos a tomar algo?");
    break; // Si borrásemos este break, también saldría el Domingo y el Default.
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

/* ---------- BUCLES ---------- */

// Un bucle es un tipo de acción que se ejecuta repetidamente
// según una o varias condiciones.

// El más conocido es el bucle for.

// (inicio  ;  fin  ;  paso a repetir - qué cambia en cada repetición)
for(let i = 0; i <= 9; i++){ 
  console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}

// Tal y como funcionan los bucles en JavaScript...
// 1. El código se recorre a sí mismo desde el inicio.
// 2. Al terminar y llegar a la llave de cierre }, avanza un paso (i++)
// y comprueba si la condición establecida en el fin (i < 10) se cumple.
// 3. Si se cumple, se recorre a sí mismo de nuevo, avanzando pasos
// una y otra vez hasta que la condición del fin NO se cumpla
