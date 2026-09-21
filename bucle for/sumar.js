let j = 5;

for(let i = 5; i >= -1 ^ j+i < 0; i--){
  if(i === -1){
    i = 5;
    j--;
  }
  console.log(j+i);
}

/*
// No es lo que pedía! Esta es la suma correcta:

let sum = 0;
for (let i = 5; i >= 0; i--) {
	sum += i; // sum = sum + i;
}

console.log(sum);

// Solo da el resultado final y no los demás porque se ejecuta cuando ya ha resuelto por completo el for

*/