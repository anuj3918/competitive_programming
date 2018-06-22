function primeSum(A) {
  for (var i = 2; i < A - 2; i++) {
    var a = i;
    var aPrime = true;
    if (a !== 2) {
      for (var j = 2; j <= Math.ceil(Math.sqrt(a)); j++) {
        if (a % j === 0) {
          //   console.log("a_c: ", a);
          aPrime = false;
          break;
        }
      }
    }
    if (aPrime) {
      //   console.log("a: ", a);
      var b = A - a;
      var bPrime = true;
      if (b !== 2) {
        for (var j = 2; j <= Math.ceil(Math.sqrt(b)); j++) {
          if (b % j === 0) {
            // console.log("j: ", j);
            // console.log("b: ", b);
            bPrime = false;
            break;
          }
        }
      }

      if (bPrime) {
        return [a, b];
      }
    }
  }
  return [2, A - 2];
}

var x = primeSum(378);
console.log(x);
