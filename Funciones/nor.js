function nor(a,b){
  if (a == false && b == false){
    return true;
  } else {
    return false;
  }
  // También vale return !a && !b , o return !a || !b;
}

const result = nor(false, 0);
console.log(result);