// 1
function boo(i) {
  if (i % 2 == 0) {
    console.log("Sí, eso es cierto");
  } else {
    console.log("No, eso es falso");
  }
}

boo(6);

//2
function hoyQuieroComer(comida) {
  console.log("Hoy quiero comer " + comida);
}

hoyQuieroComer("garbanzos");

// 3
function calcularCubo(i) {
  const num = i ** 3;
  console.log(num);
}

calcularCubo(3);

// 4
function calcularVelocidad(i) {
  vel = i + " Km/h = " + i * 1000 + " m/h";
  console.log(vel);
}

calcularVelocidad(3);

// 5
function calcularArea(a, b) {
  const area = a * b;
  console.log(area);
}

calcularArea(3, 4);

// 6
function areaTriangulo(a, b) {
  const tri = (a * b) / 2;
  console.log(tri);
}

areaTriangulo(2, 4);

// 7
function calculaPerimetro(radio) {
  const perim = 2 * Math.PI * radio;
  console.log(perim);
}

function calculaCirculo(radio) {
  const circulo = Math.PI * radio ** 2;
  console.log(circulo);
}

calculaPerimetro(7);
calculaCirculo(4);
