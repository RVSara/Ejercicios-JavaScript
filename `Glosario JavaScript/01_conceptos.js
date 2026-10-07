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
// No confundir con == (equivalencia, resulta en un true o un false),
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
// El resultado se reproduce en la consola del archivo.
// En una web abierta en navegador, se accede con Ctrl + Shift + I y luego Console.

console.log(variable + numero); // 7
//            5      +   2

// Fíjate en el espaciado:
// para comandos que se asemejan a funciones, el paréntesis va pegado
// a su nombre como console.log(), mientras que elementos separados se
// aislan con un espacio para que el programa (y tú) pueda leerlo bien.

// VisualStudio Code señala con colores los pares que coinciden de paréntesis,
// comillas, corchetes [] y llaves {}.
// Si te dejas una apertura sin cerrar o viceversa, lo verás en rojo, y hace
// que el código no funcione correctamente.
// Asegúrate de que tu documento sea limpio: con saltos de línea, con
// tabuladores, acordándote siempre de cerrar todo lo que abres y
// de que cada color tenga a su pareja en el lugar adecuado.

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

// Al contrario que los demás, '3' sale en verde en la consola.

// Si descansas el cursor del ratón sobre nuevaVariable,
// te dice qué valor tiene y qué tipo de variable es.

// El valor de nuevaVariable está entre comillas,
// así que NO ES UN NÚMERO, es una cadena.

console.log(typeof numero); // number
console.log(typeof nuevaVariable); // string (cadena)

// Con cadenas, en lugar de hacer una suma, el + une los elementos.

console.log(nuevaVariable - numero); // 1

// Otros operadores extraen el 3 de nuevaVariable, pero si fuese un texto...

console.log("abc" / numero); // NaN (Not a Number)
// No acepta operaciones matemáticas.

/* ---------- CONCATENACIÓN ---------- */

const nombre = "Pablo";
const apellido = "Monteserín";
console.log(nombre + apellido); // PabloMonteserín

// Esto es una concatenación.

// Tenemos que incluir el espacio para que no quede pegado.

const nombreCompleto = nombre + " " + apellido; // Pablo Monteserín

// Se pueden combinar variables con elementos sin nombrar.

// Para concatenar frases largas con muchas variables sin tener que
// usar tanto el +, podemos ponerlo todo entre tildes graves `
// y llamar a las variables con ${}.

const presentacion = `${cadena} Me llamo ${nombreCompleto}.`;

// console.log(Presentacion); // Error. Presentacion no está definido.

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

/* ---------- BUENAS PRÁCTICAS ---------- */

// ¿Existe algún criterio para utilizar let y const? SÍ.

// - Utilizamos let cuando sabemos que vamos a trabajar con una variable
// que nos interesa que cambie.
// No es tan frecuente como podríamos esperar, ya que, incluso si queremos
// cambiar algo, se considera más correcto almacenar el cambio en una variable
// distinta, para que no haya redundancia ni confusión con valores antiguos.

// apellido = "Señor/a " + apellido; // ¡No podemos hacer eso! Es una constante.
// Además, llamarlo "apellido" cuando usa un título... ¿no sería confuso?

// - Utilizamos const cuando queremos que nuestro código sea más sólido
// y menos propenso a errores.
// Los errores son información: te recuerdan que una variable ya existe y
// no se puede duplicar o modificar, motivándote, así, a volver arriba
// y plantear lo que quieres hacer de forma más optimizada.

const honorifico = "Señor/a " + apellido;
console.log(honorifico);

// El nombre de las variables también importa. Deben de simbolizar
// el recipiente o categoría de su contenido, de tal forma que podamos
// identificar qué hace o qué representa sin mirar la consola.

console.log(cadena);
// Este es un ejemplo malo. Sabemos que es una cadena, pero
// ni idea de qué podría contener.

const pregunta = cadena;
console.log(pregunta);

const muyBien = "Muy bien";
console.log(muyBien);
// Un poco mejor, pero "Muy bien" es el valor, no la categoría.
// Sería más correcto nombrar esta variable, por ejemplo, respuesta.

console.log(saludo);
// Con saludo, se entiende inmediatamente qué hace y qué contiene
// esta variable.
