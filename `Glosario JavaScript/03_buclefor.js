/* ---------- BUCLE FOR ---------- */

// Un bucle es un tipo de acción que se ejecuta repetidamente
// según una o varias condiciones.

// El más conocido es el bucle for.

// (inicio  ;  fin  ;  iteración a repetir - qué cambia en cada repetición)
for (let i = 0; i <= 9; i++) {
  console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}

// Recuerda el atajo de Quokka: Ctrl + Shift + P.

// Tal y como funcionan los bucles en JavaScript:
// 1. El código se recorre a sí mismo desde el inicio, normalmente con una
// variable "flotante" a la que llamamos i que cambia en cada iteración.
// 2. Al terminar y llegar a la llave de cierre }, avanza una iteración (i++)
// y comprueba si la condición establecida en el fin (i < 10) se cumple.
// 3. Si se cumple, se recorre a sí mismo de nuevo, avanzando iteraciones
// una y otra vez, hasta que la condición del fin deje de cumplirse.

// i = (cualquier número) { -----
//          ˄                   |
//          |                   ˅
//          |            console.log(i);}
//        true                  |
// (iteración siguiente)        ˅
//          ˄                  i++
//          |                   |
//          ----- i <= 9 ? <-----
//                  |
//                  ˅
//                false
//                  |
//                  ˅
//            el bucle termina

// Son muy útiles cuando se necesita acumular algo.
// Planteemos un ejercicio: partiendo de un tope con un número alto, quiero
// acumular números que crezcan de forma exponencial y luego sumarlos.

let suma1 = 0; // Este debe ser con let, ya que el bucle cambiará su valor.
const tope = 50;

for (let i = 1; i <= tope; i += i) {
  // Podemos poner cualquier tipo de fórmula para cada iteración.
  // i += i es lo mismo que hacer i = i * 2
  // Voy a poner un console.log aquí para que veas lo que está pasando:
  console.log(i); // 1, 2, 4, 8, 16, 32
  suma1 += i;
  // En cada iteración, suma1 recoge el valor de i y se lo añade a sí misma.
}
// 1 + 2 + 4 + 8 + 16 + 32 =
console.log(suma1); // 63

// !! EL ORDEN ES MUY IMPOTANTE !!

let suma2 = 0;

// Si metemos el console.log dentro...
for (let i = 1; i <= tope; i += i) {
  console.log(i); // 1, 2, 4, 8, 16, 32
  suma2 += i;
  // suma1 pasa a formar parte del bucle y a reproducirse en cada iteración.
  console.log(suma2); // 1, 3, 7, 15, 31, 63
}
// Se ve el proceso de cómo va añadiéndose cada valor de i poco a poco
// (1, 1+2, 1+2+4...) y, aunque funciona y nos da la suma correcta,
// hay que tenerlo en cuenta si nos interesa registrar solamente
// el resultado final.

// Cambiando la posición de la variable que necesitamos engordar...
for (let i = 1; i <= tope; i += i) {
  console.log(i);
  // suma3 += i; // Error. No puede acceder a suma3.
  // Recuerda que JavaScript lee de arriba a abajo.
  // suma3 está declarado después del for. El código busca suma3 arriba,
  // y no lo encuentra porque, técnicamente, aún no "existe".
}
let suma3 = 0;
// Desde aquí, suma3 no tiene forma de recolectar y acumular los valores de i.
// Incluso si la tuviera y no diese error, da igual qué valor alcanzase
// al momento de terminar el bucle, que, al hacer suma3 = 0, estaríamos
// reasignando y sobreescribiendo el valor que hubiese acumulado antes.
console.log(suma3); // 0

// Imagina que metemos la suma dentro del for.
for (let i = 1; i <= tope; i += i) {
  let suma4 = 0;
  // Sí, puedes declarar variables nuevas dentro de un for o de un if.
  console.log(i); // 1, 2, 4, 8, 16, 32
  suma4 += i;
}
// console.log(suma4); // Error. suma4 no está definida.
// Pasaría lo mismo si intentásemos hacer console.log(i) fuera del bucle.

// Este error ocurre porque estamos intentando llamar a una variable
// aislada que solo existe dentro del bucle for. Se llama variable local.
// Las variables que no están contenidas entre llaves (por ejemplo tope)
// se conocen como variables globales.

// JavaScript es un lenguaje que funciona como cajones en un armario:
// Todo lo que pasa entre llaves {}, incluyendo variables nuevas,
// está contenido dentro de ese bloque (como un cajón).
// Una función, un if/else o un for pueden "meter" variables globales
// dentro suya y trabajar con ellas, pero para variables locales,
// con los conocimientos que tenemos ahora, no podemos "sacar"
// elementos fuera de su bloque. Veremos cómo hacerlo más adelante.

// ¿Y si copiásemos lo mismo que suma4 con el console.log dentro?
for (let i = 1; i <= tope; i += i) {
  let suma5 = 0;
  // Para que veas mejor lo que está pasando:
  console.log(suma5); // 0, 0, 0, 0, 0, 0

  console.log(i); // 1, 2, 4, 8, 16, 32
  suma5 += i;
  console.log(suma5); // 1, 2, 4, 8, 16, 32
  // No solo se está repitiendo porque ahora forma parte del bucle, además
  // da el mismo resultado que i porque se resetea a 0 al principio de cada
  // repetición y luego se suma el que sea el valor de i en ese momento:
  // 0+1, 0+2, 0+4...
}

// Otro ejemplo de bucle: vamos a buscar todos los divisores pares del tope.

for (let i = 0; i <= tope; i += 2) {
  // i sube de 2 en 2
  let j;
  if (50 % i === 0) {
    // Para coincidencia con divisores. Consulta 02_ifelse.js
    j = i; // j registra el valor de i en cada iteración que sea un divisor.
  } else {
    continue;
    // Un nuevo concepto: interrumpe el bucle pero,
    // al contrario que break; no lo detiene.
    // Permite que pase de largo de algo que no nos
    // interesa y continúe recorriéndose.
    // Observa lo que pasa si borras continue;
  }
  console.log(j); // 2, 10, 50
  // Si borras continue; todos los undefined que aparecen son console.logs,
  // de j, que aparece sin definir al principio de cada iteración.
  // Al ser casos de "else", corresponden a cada número par que va contando
  // o acumulando i que NO son divisores de 50 : 4, 6, 8, 12...
}

// !! EL ORDEN ES MUY IMPOTANTE !!
