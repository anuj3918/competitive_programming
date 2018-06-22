var times = 0;

// This solution uses a dictionary to keep track of all A^k
// var power = {
//   0: 1,
//   1: 2
// };
// function calcPower(A, B) {
//   if (power[B]) {
//     return power[B];
//   }
//   times++;
//   var product = 1;
//   var halfB = parseInt(B / 2, 10);

//   var firstHalf = 1;
//   if (power[halfB]) {
//     firstHalf *= power[halfB];
//   } else {
//     firstHalf *= calcPower(A, halfB);
//     power[halfB] = firstHalf;
//   }

//   var secondHalf = 1;
//   if (power[B - halfB]) {
//     secondHalf *= power[B - halfB];
//   } else {
//     secondHalf *= calcPower(A, B - halfB);
//     power[B - halfB] = secondHalf;
//   }

//   product = firstHalf * secondHalf;
//   power[B] = product;
//   return product;
// }

// This solution caches A^(k/2) in memory and reuses it
function calcPower(A, B) {
  if (B === 1) {
    return A;
  }
  times++;
  var product = 1;
  var halfB = parseInt(B / 2, 10);
  n;
  product = calcPower(A, halfB);
  if (B % 2 === 0) {
    product = product * product;
  } else {
    product = product * product * A;
  }

  return product;
}

var answer = calcPower(-1, 1);
console.log(answer);
console.log("O(log(B)) times: ", times);
