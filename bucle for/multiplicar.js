let j = 1;

for(let i = 1; i <= 10 ^ j*i >= 90; i++){
  if(i === 10){
    i = 1;
    j++;
  }
  console.log(`${j} * ${i} = ${j*i}`);
}

/*
// Solución:

for (let i = 1; i < 10; i++) {
	for (let j = 1; j < 10; j++) {
		console.log(i + ' * ' + j + ' = ' + i * j); // Al concluír la j, la i va al siguiente paso
	}
}

*/