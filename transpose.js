function rotate(A) {
  nr = A.length;
  nc = A[0].length;

  // transpose matrix in constant space
  for (var i = 0; i < nr; i++) {
    for (var j = i; j < nc; j++) {
      var temp = A[i][j];
      A[i][j] = A[j][i];
      A[j][i] = temp;
    }
  }
  console.log(A);

  // swap the columns, moving from outwards to inwards
  for (var j = 0; j < nc / 2; j++) {
    for (var i = 0; i < nr; i++) {
      var temp = A[i][j];
      A[i][j] = A[i][nc - j - 1];
      A[i][nc - j - 1] = temp;
    }
  }
  console.log(A);
}

// rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
