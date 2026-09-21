const calculaPerimetro = (radio) => {
  const perim = 2*Math.PI*radio;
  console.log(perim);
}

const calculaArea = (radio) => Math.PI*radio**2;

calculaPerimetro(7);

const area = calculaArea(4);
console.log(area);