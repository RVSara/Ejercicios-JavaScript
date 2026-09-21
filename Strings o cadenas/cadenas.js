// 1
const longitud = (txt) => txt.length;

console.log(longitud("Ana"));

// 2
const devuelvePrimeraLetra = (txt) => txt[0];

console.log(devuelvePrimeraLetra("Felicia"));

// 3
const devuelveUltimaLetra = (txt) => txt.substring(txt.length - 1); // txt.slice(-1);

console.log(devuelveUltimaLetra("Denis"));

// 4
const devuelveEnesimaLetra = (txt, num) => txt[num];

console.log(devuelveEnesimaLetra("Evaristo", 2));

// 5
const cortarFrase = (frase) => frase.slice(3, 7);

console.log(cortarFrase("wonderful day"));

// 6
const toCase = (txt) => txt.toLowerCase() + "-" + txt.toUpperCase();

console.log(toCase("Pablo"));

// 7
const anagram = (a, b) => (a[0] + b[0]).toUpperCase();

console.log(anagram("rodríguez", "vega"));

// 8
const firstChar = (txt) => txt.trim().charAt(0);

console.log(firstChar(" Rosa Parks "));

// 9
const devuelveMasLarga = (a, b) => (a.length >= b.length ? a : b);

console.log(devuelveMasLarga("perro", "gato"));

// 10
const devuelveMasLarga2 = (a, b, c) => {
  if (a.length > b.length && a.length > c.length) {
    return a;
  } else if (b.length > a.length && b.length > c.length) {
    return b;
  } else if (c.length > a.length && c.length > b.length) {
    return c;
  } else return "No hay una única cadena más larga.";
};

console.log(devuelveMasLarga2("fresa", "coco", "naranja"));

// 11
const generarNombre = (a, b, c) => {
  if (a.length < 5 || b.length < 5 || c.length < 5) {
    return "error";
  } else return a.slice(0, 3) + b.slice(0, 3) + c.slice(0, 3);
};

console.log(generarNombre("popop", "pepep", "papap"));

// 12
const generarNombre2 = (a, b, c) => {
  if (a.length < 5 || b.length < 5 || c.length < 5) {
    return "error";
  } else return a.slice(-1) + b.slice(-1) + c.slice(-1);
};

console.log(generarNombre2("cacao", "cocoa", "carol"));

// 13
const generarNombre3 = (a, b, c) => {
  if (a.length < 5 || b.length < 5 || c.length < 5) {
    return "error";
  } else return a.slice(-3) + b.slice(-3) + c.slice(-3);
};

console.log(generarNombre3("ninio", "ninia", "mayor"));

// 14 y 15
const tieneLetra = (txt, letra) =>
  txt.toLowerCase().includes(letra.toLowerCase());

console.log(tieneLetra("clase", "c"));

// 16 y 17
const crearPalabra = (letra, num) => letra.repeat(num).toUpperCase();

console.log(crearPalabra("r", 7));

// 18
const addGuiones = (txt) => {
  let x = "";
  for (let i = 0; i < txt.length; i++) {
    let letra = txt.charAt(i);
    x += "-" + letra;
  }
  return x;
};

console.log(addGuiones("hola"));

// 19 y 20
const contadorDeLetras = (txt, letra) => {
  let x = 0;
  for (let i = 0; i < txt.length; i++) {
    if (txt.toLowerCase().charAt(i).includes(letra.toLowerCase())) {
      x++;
    }
  }
  return x;
};

console.log(contadorDeLetras("BOOLEANO", "o"));

// 21
const contadorDeLetras2 = (txt1, txt2, letra) => {
  const x = contadorDeLetras(txt1, letra);
  const y = contadorDeLetras(txt2, letra);
  const random = [txt1, txt2];
  if (x == y) {
    return random[Math.round(Math.random())];
  } else if (x > y) {
    return txt1;
  } else return txt2;
};

console.log(contadorDeLetras2("hermano", "bonita", "o"));

// 22
const indexOfIgnoreCase = (txt1, txt2) =>
  txt1.toLowerCase().indexOf(txt2.toLowerCase());

console.log(indexOfIgnoreCase("bit", "IT"));

// 23
const firstWord = (txt) => {
  let primeraPalabra = "";
  for (let i = 0; i < txt.length; i++) {
    if (txt.charAt(i).includes(" ")) {
      break;
    } else primeraPalabra += txt.charAt(i);
  }
  return primeraPalabra;
};

console.log(firstWord("see and stop"));
