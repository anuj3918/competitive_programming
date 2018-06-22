function threeSumZero(A) {
	A = A.sort(function(a, b) {
		if (a < b) {
			return -1;
		} else {
			return 1;
		}
	});

	console.log(A);
	var len = A.length;

	var i = 0,
		j = i + 1,
		k = len - 1;

	var L = A[i];
	var moving = A[j];
	var R = A[k];

	var sum = L + R + moving;
	var final = {},
		finalSets = [];

	var times = 0;
	while (i < k - 1 && j < k) {
		times++;
		L = A[i];
		moving = A[j];
		R = A[k];
		sum = L + R + moving;
		console.log('checking: ', L, moving, R, sum);
		console.log(i, j, k);
		if (sum === 0) {
			var set = [L, moving, R].toString();
			if (!final[set]) {
				final[set] = true;
				finalSets.push([L, moving, R]);
			}

			j++;
			k--;
		}
		if (sum < 0) {
			j++;
		}
		if (sum > 0) {
			k--;
			j = i + 1;
		}
		if (j >= k) {
			i++;
			j = i + 1;
			k = len - 1;
		}
	}

	return finalSets;
}
// var inp = [-1, -2, -5, 3, 2, 8];
var inp = [1, -4, 0, 0, 5, -5, 1, 0, -2, 4, -4, 1, -1, -4, 3, 4, -1, -1, -3];
// var inp = [1, 2, 3, 4];
// var inp = [-1, 2, 1, -4];
var answer = threeSumZero(inp);
console.log(answer);
