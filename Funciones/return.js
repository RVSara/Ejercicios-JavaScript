// ¿Qué valor de x se mostrará en la consola?

function hello() {
  return "Hi!";
}

const greeting = hello();
console.log(greeting); // Hi!

function reply(phrase) {
  return phrase;
}

const question = reply("How do you do?");
console.log(question); // How do you do?

function whereIs(name) {
  return "Dónde esta " + name + "?";
}

const donde = whereIs("Jacky");
console.log(donde); // Dónde esta Jacky?

// 4
function echo(n) {
  return n;
}

console.log(echo("Greta"));
console.log(echo("CO2"));

// 5
function saludar(nombre) {
  return "Hola " + nombre + "!";
}

console.log(saludar("Ada"));
console.log(saludar("Grace"));

// 6
function test(val) {
  if (val >= 10 && val <= 20) {
    // Cambia esta línea
    return "Inside";
  } else {
    return "Outside";
  }
}

console.log(test(10));

// 7
function testEqual(val) {
  if (val == 12) {
    // Cambia esta línea
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(12));

// 8
function testElse(val) {
  return val > 5 ? "Mayor que 5" : "Menor o igual a 5";
}

console.log(testElse(4));

// 9
function testElse2(val) {
  let result = "";
  if (val == 5) {
    result = "Equal to 5";
  } else if (val > 5) {
    result = "Bigger than 5";
  } else result = "Smaller than 5";
  return result;
}

console.log(testElse2(6));

// 10
function hola(nombre) {
  return "Hi " + nombre + "!";
}

const h1 = hola("Selva");
const h2 = hola("Pola");
const x = h1 + " " + h2;
console.log(x); // Hi Selva! Hi Pola!

// 11
function duplica(nombre) {
  return nombre + " and " + nombre;
}

console.log(duplica("Roy")); // Roy and Roy

// 12
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

const size = testSize(5);
console.log(size);
