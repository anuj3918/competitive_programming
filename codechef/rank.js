function rank(A) {
  var totalRank = 0;
  var placesLeft = A.length - 1;
  var x = Number.MAX_SAFE_INTEGER + 1;
  while (placesLeft >= 0) {
    var ch = A[0];
    var S = A.split("").sort(function(a, b) {
      if (a > b) return 1;
      else return -1;
    });

    var smaller = S.indexOf(ch);
    // console.log(A, ch, S, smaller, placesLeft);
    if (!(placesLeft === 0 || smaller === 0)) {
      var factorial = 1;
      for (var j = 1; j <= placesLeft; j++) {
        factorial = (factorial * j) % 1000003;
      }
      //   if (factorial > x) {
      //     console.log("factorial out of bounds");
      //   }
      totalRank += smaller * factorial;
    }
    // if (totalRank > x) {
    //   console.log("out of bounds");
    // }

    A = A.substring(1, A.length);
    placesLeft -= 1;
  }

  return totalRank % 1000003 + 1;
}

// console.log(rank("VIEW"));
// console.log("\n");
// console.log(rank("CADB"));
console.log(rank("UJSQEGYMRLOCWDFVXHZT"));
