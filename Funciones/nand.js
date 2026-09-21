function nand(a,b){
  if (a == true && b == true){
    return false;
  } else {
    return true;
  }
  // También vale return !(a && b);
}

const result = nand(true, 1);
console.log(result);