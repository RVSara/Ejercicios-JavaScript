// 1
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log(random(5, 7));

// 2
const nombre = "Sara";

const selectorDeLetra = (name) => name.charAt(random(0, name.length - 1));

console.log(selectorDeLetra(nombre));
