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

	var finalCount = 0,
		finalSets = [];

	var i = 0,
		j = 0,
		k = 0,
		len = A.length;
	var times = 0;
	while (i < len - 2) {
		j = i + 1;
		while (j < len - 1) {
			k = j + 1;
			while (k < len && A[i] + A[j] > A[k]) {
				k++;
			}
			finalCount = finalCount + k - j - 1;
			j++;
		}
		i++;
	}
	return finalCount;
}

// var inp = [5, 10, 11, 12];
// var inp = [1, 1, 10, 10, 100, 100];
// var inp = [12, 13, 16, 20];
var inp = [2345678, 23456, 23459, 2343, 5463789, 2345678, 23456, 23459, 2343, 5463789];
var answer = threeSumZero(inp);
console.log(answer);
