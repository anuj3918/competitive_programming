function nextPermutation(A) {
  var l = A.length;
  for (var i = 0; i < l; i++) {
    var maxedOut = true;
    for (var j = i; j < l - 1; j++) {
      if (A[j] < A[j + 1]) {
        maxedOut = false;
        break;
      }
    }
    if (maxedOut === true) {
      var current;
    }
  }
}
