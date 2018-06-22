function findMedian(A) {
  var r = A.length;
  var c = A[0].length;
  var max = 0,
    min = A[0][c - 1];
  for (var i = 0; i < r; i++) {
    if (A[i][0] < min) {
      min = A[i][0];
    }
    if (A[i][c - 1] > max) {
      max = A[i][c - 1];
    }
  }
  // console.log("min: ", min);
  // console.log("max: ", max);

  var h = 0;
  var exists = false;
  var m = parseInt((min + max) / 2);
  var match = (r * c - 1) / 2;
  var times = 0;
  while (!(h == match && exists) && times < 12) {
    times++;

    var m = parseInt((min + max) / 2);

    var result = findGreater(A, m);
    console.log("\nchecking for: ", " min=", min, " max=", max, " mid=", m);

    h = result.h1;
    exists = result.exist;
    var dups = result.dup;
    console.log("got count: ", " num=", h, " dups=", dups);

    if (h == match && exists) {
      // console.log("hrer");
      console.log("here5");

      return m;
    } else if (h < match && dups + h >= match && exists) {
      // console.log("hrer");
      console.log("here7");

      return m;
    } else if (h < match) {
      console.log("here4");
      max = m - 1;
    } else if (h > match) {
      console.log("here3");
      // if (min == m) {
      //   m++;
      // }
      min = m + 1;
    } else if(h == match && !exists){
      h = findGreater(A, parseInt((m+min)/2));
      if()
      h = findGreater(A, parseInt((m+max)/2));

      
    }
  }
  return m;
}

function findGreater(X, n) {
  var higher = 0;
  var nExists = false;
  var nDuplicates = 0;
  for (var r = 0; r < X.length; r++) {
    for (var s = 0; s < X[0].length; s++) {
      if (X[r][s] > n) {
        higher++;
      }
      if (X[r][s] == n) {
        nExists = true;
        nDuplicates++;
      }
    }
  }
  if (nExists) {
    return { h1: higher, dup: nDuplicates - 1, exist: true };
  }
  return { h1: higher, dup: nDuplicates, exist: false };
}

// var inp = [[1, 1, 1, 2, 3]];
var inp = [[1, 1, 1, 9, 9]];
// var inp = [[1, 1, 2, 3, 3, 3, 3]];

// var inp = [[2, 2, 2, 2, 2, 3, 3]];
// var inp = [[1, 1, 3, 3, 3, 3, 3]];

// var inp = [[1, 3, 5], [2, 6, 9], [3, 6, 9]];
var ans = findMedian(inp);
console.log(ans);



