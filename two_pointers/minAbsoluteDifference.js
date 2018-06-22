function minAbsoluteDiff(A, B, C) {
	var a = A[0],
		b = B[0],
		c = C[0];
	var min = Math.min(a, b, c);
	var max = Math.max(a, b, c);

	var minIs = 'a';
	if (min == b) {
		minIs = 'b';
	}
	if (min == c) {
		minIs = 'c';
	}

	var i = 0;
	j = 0;
	k = 0;

	var minimumDiff = max - min;

	while (i < A.length && j < B.length && k < C.length) {
		(a = A[i]), (b = B[j]), (c = C[k]);
		min = Math.min(a, b, c);
		max = Math.max(a, b, c);
		var diff = max - min;
		if (diff < minimumDiff) {
			minimumDiff = diff;
		}

		if (min == a) {
			minIs = 'a';
			i++;
		} else if (min == b) {
			minIs = 'b';
			j++;
		} else {
			minIs = 'c';
			k++;
		}
	}

	return minimumDiff;
}

var answer = minAbsoluteDiff([1, 4, 5, 8, 10], [6, 9, 15], [2, 3, 6, 6]);
console.log(answer);
