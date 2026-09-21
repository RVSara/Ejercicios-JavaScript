function xor(a,b){
  if (a ^ b){
    return true;
  } else {
    return false;
  }
  // También vale return a !== b;
}

const result = xor(false, 0);
console.log(result);