function swapper(A, m) {
	var zeroesCount = [];
	var zeroesIndexes = [];
	var countZeroes = 0;
	var zeroIndex = 0;
	for (var i = 0; i < A.length; i++) {
		if (A[i] == 0) {
			countZeroes++;
			// zeroIndex = i;
		}
		zeroesCount.push(countZeroes);
		// zeroesIndexes.push(zeroIndex);
	}
	console.log(zeroesCount);
	var startZero = 0;
	var endZero = startZero + 2;
	if (A[0] == 1) {
		endZero = startZero + 3;
	}
	var max = 0;
	var diff = 0;
	var set = [0, 0];
	i = 0;
	while (endZero < A.length) {
		if (zeroesCount[i] > endZero) {
			diff = i - startZero - 1;
			if (diff > max) {
				max = diff;
				set = [startZero, i];
			}
		}
		i++;
	}
	// console.log(zeroesIndexes);
}

var input = [1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1];
var answer = swapper(input, 3);
