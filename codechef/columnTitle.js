function getTitle(A) {
  var c = "";
  while (A >= 0) {
    var rem = A % 26;
    if (rem === 0) {
      rem = 26;
    }
    var col = String.fromCharCode(64 + rem);
    c = c + col;
    A = Math.floor(A / 26) - 1;
  }
  return c
    .split("")
    .reverse()
    .join("");
}

console.log(getTitle(27));
console.log(getTitle(52));
console.log(getTitle(79));
