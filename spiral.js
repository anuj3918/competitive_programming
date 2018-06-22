function spiral(A) {
	var r = A.length;
	var c = A[0].length;
	var tu = 0;
	var td = r - 1;
	var tl = 0;
	var tr = c - 1;

	var count = 0;
	while (count < r * c) {
		// print top row
		for (var i = tl; i <= tr; i++) {
			console.log(A[tu][i]);
			count++;
		}
		tu++;

		if (count == r * c) {
			break;
		}

		// print right column
		for (var i = tu; i <= td; i++) {
			console.log(A[i][tr]);
			count++;
		}
		tr--;

		if (count == r * c) {
			break;
		}

		// print bottom row
		for (var i = tr; i >= tl; i--) {
			console.log(A[td][i]);
			count++;
		}
		td--;

		if (count == r * c) {
			break;
		}

		// print left column
		for (var i = td; i >= tu; i--) {
			console.log(A[i][tl]);
			count++;
		}
		tl++;

		if (count == r * c) {
			break;
		}
	}
}

spiral([[1, 2, 3, 4, 5, 6]]);
