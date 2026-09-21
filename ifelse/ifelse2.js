/* Dada una constante que contiene la nota de un examen que va de 0 a 10…

Si es mayor que cinco mostrar el texto «Aprobado».
Si es igual a cinco, mostrar el texto «Aprobado por los pelos»
Si es menor que cinco, mostrar el texto «Suspenso». */
const nota = 6;

if(nota > 5){
  console.log("Aprobado");
} else if(nota == 5){
  console.log("Aprobado por los pelos");
} else {
  console.log("Suspenso");
}