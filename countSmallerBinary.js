function countSmaller(A, l, r, n) {
	//   if (r - l === 0) {
	//     if (A[l] < n) return l + 1;
	//     else if (A[l] > n) return l;
	//     else return l;
	//   }
	if (r - l === 0) {
		if (A[l] < n) {
			return { smaller: l + 1, exists: false };
		} else if (A[l] > n) {
			return { smaller: l, exists: false };
		} else if (A[l] == n) {
			return { smaller: l, exists: true };
		} else {
			return { smaller: l, exists: false };
		}
	}
	var m = parseInt((l + r) / 2);
	var mid = A[m];
	console.log(A.slice(l, r + 1), mid);
	if (mid == n) {
		return m;
	} else if (mid < n) {
		return countSmaller(A, m + 1, r, n);
	} else {
		return countSmaller(A, l, m - 1, n);
	}
}

console.log(countSmaller([1, 2, 2, 2, 10, 12, 17], 0, 6, 2));
