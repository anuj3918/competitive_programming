function uniquePaths(A, B) {
	if (A === 1 && B === 1) {
		return 1;
	}
	if (A === 1) {
		return B - 1;
	}
	if (B === 1) {
		return A - 1;
	}
	var nDown = A - 1;
	var nRight = B - 1;
	var totalMoves = nDown + nRight;

	// arrange D, R in different ways
	var denominator = 1;
	for (var i = 1; i <= nRight; i++) {
		denominator *= i;
	}

	var numerator = 1;
	for (var i = nDown + 1; i <= totalMoves; i++) {
		numerator *= i;
	}
	console.log(numerator, denominator);
	var combinations = numerator / denominator;
	console.log(combinations);
}

uniquePaths(3, 3);
