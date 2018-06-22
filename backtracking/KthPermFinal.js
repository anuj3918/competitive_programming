// This is the most optimised solution with hashing and loops only as I am not finding every possible iteration

function getPermutation(n, k) {
	var possible = [];
	var numberOfPermutations = { '-1': 0, '0': 1 };

	var factorial = 1;
	for (var i = 1; i <= n; i++) {
		factorial *= i;
		numberOfPermutations[i.toString()] = factorial;
		possible.push(i);
	}

	var currentRank = 0;
	var permutation = [];
	var position = 0;
	while (permutation.length !== n) {
		var element = possible[position];
		if (element) {
			// console.log('\n', possible);
			// console.log(element);
			var positionsLeft = n - permutation.length - 1;
			var tempRank = currentRank + numberOfPermutations[positionsLeft.toString()];
			// console.log(tempRank);
			if (tempRank >= k) {
				permutation.push(element);
				possible[position] = null;
				position = -1;
			} else {
				currentRank = tempRank;
			}
			// console.log(permutation);
		}
		position++;
	}

	// console.log(permutation);
	return permutation.join('');
	// var sequence = solve([], 0, k, remaining, numberOfPermutations);
}

// getPermutation(4, 19);
var answer = getPermutation(2, 2);
console.log(answer);

function solve(permutation, currentRank, k, remaining, numPermutations) {
	var element = remaining[0];
}
