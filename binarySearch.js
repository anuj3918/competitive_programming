function binarySeach(A, l, r, n) {
	if (n < A[l] || n > A[r]) {
		return -1;
	}
	if (r - l === 0 && A[l] !== n) {
		return -1;
	}
	var m = parseInt((l + r) / 2);
	var mid = A[m];
	console.log(A.slice(l, r + 1), mid);
	if (mid == n) {
		return m;
	} else if (mid < n) {
		return binarySeach(A, m + 1, r, n);
	} else {
		return binarySeach(A, l, m - 1, n);
	}
}

console.log(binarySeach([1, 2, 5, 8, 10, 12, 17], 0, 6, 4));
