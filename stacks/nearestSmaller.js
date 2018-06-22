function nearestSmaller(A) {
	// This is same as stock span problem, just take the difference of elements with ARRAY_MAX and apply stock span logic
	var max = -10000;
	for (var i = 0; i < A.length; i++) {
		if (A[i] > max) {
			max = A[i];
		}
	}

	var stack = [];
	var slen = -1;
	var final = [];

	for (i = 0; i < A.length; i++) {
		var e = max - A[i];

		if (slen === -1) {
			stack.push(e);
			slen++;
			final.push(-1);
		} else if (e >= stack[slen]) {
			while (slen >= 0 && stack[slen] <= e) {
				stack.pop();
				slen--;
			}
			if (slen === -1) {
				final.push(-1);
			} else {
				final.push(max - stack[slen]);
			}
			stack.push(e);
			slen++;
		} else {
			final.push(max - stack[slen]);
			stack.push(e);
			slen++;
		}
	}
	return final;
}

// var input = [4, 5, 2, 10, 8];
// var input = [34, 35, 27, 42, 5, 28, 39, 20, 28];
var input = [3, 2, 1, 1];

var answer = nearestSmaller(input);

console.log(answer);
