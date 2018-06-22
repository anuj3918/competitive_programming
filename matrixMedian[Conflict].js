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
  var times = 0;
  while (!(h == (r * c - 1) / 2 && exists) && times < 12) {
    times++;

    if(max -min <2){
      var high1 = 
    }
    var m = parseInt((min + max) / 2);

    var result = findGreater(A, m, 0);
    var match = (r * c - 1) / 2;
    console.log("\nchecking for: ", min, max, m, match);

    h = result.h1;
    exists = result.exist;
    var dups = result.dup;
    console.log("got count: ", m, h, dups);

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
      max = m;
    } else if (h > match) {
      console.log("here3");
      if (min == m) {
        m++;
      }
      min = m;
    }

    // if (max - min < 2) {
    //   min = max;
    //   console.log("here6");
    // }
  }
  return m;
}

function findGreater(X, n) {
  var higher = 0;
  var nExists = false;
  var nDuplicates = -1;
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
    return { h1: higher, dup: nDuplicates, exist: true };
  }
  return { h1: higher, dup: nDuplicates, exist: false };
}

// var inp = [[1, 1, 1, 2, 3]];
var inp = [[1, 1, 1, 3, 3]];
// var inp = [[1, 1, 2, 3, 3, 3, 3]];

// var inp = [[2, 2, 2, 2, 2, 3, 3]];
// var inp = [[1, 1, 3, 3, 3, 3, 3]];

// var inp = [[1, 3, 5], [2, 6, 9], [3, 6, 9]];
var ans = findMedian(inp);
console.log(ans);
