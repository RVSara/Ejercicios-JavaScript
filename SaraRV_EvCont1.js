// 1
let a = 5;
let b = 5;

console.log("El valor de a es " + a);
console.log("El valor de b es " + b);

// 2
if (a === b) {
  console.log("Son iguales");
} else if (a > b) {
  console.log(a + " es mayor que " + b);
} else console.log(b + " es mayor que " + a);

// 3
if (a > b) {
  function multiplicar(num1, num2) {
    return num1 * num2;
  }
  const multiplicacion = multiplicar(a, b);
  console.log(multiplicacion);
}

// 4
if (b > a) {
  const divisible = (num1, num2) => num2 % num1 === 0;
  const sonDivisibles = divisible(a, b);
  console.log(sonDivisibles);
}

// 5
if (a === b) {
  const potencia = (num1, num2) => {
    let elevar = 0;
    for (i = 1; i <= num2; i++) {
      elevar = num1 * i; // Lo hice mal - solo hace la potencia^2
      // elevar = 1;
      // elevar *= num1;
      // console.log(elevar);
    }
    return elevar;
  };
  const elevadoA = potencia(a, b);
  console.log(elevadoA);
}
