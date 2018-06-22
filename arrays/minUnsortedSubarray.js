function subUnsort(A) {
	var ptr1 = null;
	var ptr2 = null;
	var current = A[0];
	var minInUnsorted = 10000;
	for (var i = 1; i < A.length; i++) {
		if (A[i] < current) {
			if (ptr1 === null) {
				ptr1 = i - 1;
				ptr2 = i;
				minInUnsorted = A[i];
			} else {
				ptr2 = i;
				if (minInUnsorted > A[i]) {
					minInUnsorted = A[i];
				}
			}
		} else {
			current = A[i];
		}
		// console.log(A[i], ptr1, ptr2);
	}

	if (ptr1) {
		// console.log('minInunsorted: ', minInUnsorted);
		for (i = 0; i <= ptr1; i++) {
			if (A[i] > minInUnsorted) {
				break;
			}
		}
		ptr1 = i;
	}
	if (ptr1 != null && ptr2 !== null) {
		return [ptr1, ptr2];
	}
	return [-1];
}

// var input = [1, 3, 2, 4, 5];
var input = [1, 3, 4, 5, 2];

// var input = [1, 6, 4, 5, 7, 8, 10, 9, 11];
// var input = [1, 2, 3, 5, 6, 13, 15, 16, 17, 13, 13, 15, 17, 17, 17, 17, 17, 19, 19];

var answer = subUnsort(input);
console.log(answer);
