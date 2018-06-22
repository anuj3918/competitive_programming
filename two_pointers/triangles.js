function threeSumZero(A) {
	if (A.length < 3) {
		return 0;
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
		k = i + 2;

	var L = A[i];
	var moving = A[j];
	var R = A[k];

	var finalCount = 0,
		finalSets = [];

	var times = 0;
	while (i < len - 2) {
		times++;
		L = A[i];
		moving = A[j];
		R = A[k];

		// console.log(i, j, k);
		if (j <= len - 2 && k <= len - 1) {
			times++;
			// console.log('\nchecking: ', L, moving, R, L + moving > R);
			if (L + moving > R) {
				// finalSets.push([L, moving, R]);
				finalCount++;
				k++;
			}
			if (L + moving <= R) {
				j++;
				k = j + 1;
			}
		} else {
			console.log(times);
			i++;
			j = i + 1;
			k = j + 1;
		}
	}
	// console.log(finalSets);
	return finalCount;
}

// var inp = [5, 10, 11, 12];
// var inp = [1, 1, 10, 10, 100, 100];
// var inp = [12, 13, 16, 20];
var inp = [2345678, 23456, 23459, 2343, 5463789, 2345678, 23456, 23459, 2343, 5463789, 5463786];
var answer = threeSumZero(inp);
console.log(answer);
