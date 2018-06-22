function findMinXor(A) {
	// Trick: The XOR value keeps increasing as the difference between two numbers increases
	// Sort the array and check the adjacent elements for minimum XOR
	// 15 ^ 8 = 7
	// 15 ^ 5 = 10

	A.sort(function(a, b) {
		if (a < b) {
			return -1;
		} else if (a > b) {
			return 1;
		} else {
			return 0;
		}
	});
	var min = A[0] ^ A[A.length - 1];
	for (var i = 0; i < A.length - 1; i++) {
		var xor = A[i] ^ A[i + 1];
		if (xor < min) {
			min = xor;
		}
	}

	return min;
}

// var input = [1, 4, 2, 6, 9];
// var input = [0, 2, 5, 7];
var input = [0, 4, 7, 9];

var output = findMinXor(input);
console.log(output);
