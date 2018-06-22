function mergeSortedArrays(A, B) {
	var i = 0;
	var j = 0;
	var C = [];
	while (i < A.length && j < B.length) {
		if (A[i] <= B[j]) {
			C.push(A[i]);
			i++;
		}
		if (A[i] > B[j]) {
			C.push(B[j]);
			j++;
		}
	}
	if (i < A.length) {
		C = C.concat(A.slice(i, A.length));
	}

	if (j < B.length) {
		C = C.concat(B.slice(j, B.length));
	}

	return C;
}

var answer = mergeSortedArrays([1, 4, 8], [1, 3, 5]);
console.log(answer);
