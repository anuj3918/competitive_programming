function threeSumClosest(A, B) {
	if (A.length < 3) {
		return 1000000000;
	}
	A = A.sort(function(a, b) {
		if (a < b) {
			return -1;
		} else {
			return 1;
		}
	});
	// console.log(A);
	var len = A.length;

	var i = 0,
		j = i + 1,
		k = len - 1;

	var L = A[i];
	var moving = A[j];
	var R = A[k];

	var sum = L + R + moving;
	var target = Math.abs(B - sum);
	var closest = sum;
	// var times = 0;
	while (i < k - 1 && closest !== B) {
		// times++;
		L = A[i];
		moving = A[j];
		R = A[k];
		sum = L + R + moving;
		// console.log('checking: ', L, moving, R, sum);
		if (Math.abs(B - sum) < target) {
			target = Math.abs(B - sum);
			closest = sum;
		}
		if (sum < B) {
			j++;
			if (j == k) {
				i++;
				j = i + 1;
			}
		}
		if (sum > B) {
			k--;
			if (j == k) {
				j = i + 1;
			}
		}
	}

	return closest;
}
// var inp = [-1, -2, -5, 3, 2, 8];
var inp = [-70, -20, 1, 10, 25, 63];
// var inp = [1, 2, 3, 4];
// var inp = [-1, 2, 1, -4];
var answer = threeSumClosest(inp, 5);
console.log(answer);
