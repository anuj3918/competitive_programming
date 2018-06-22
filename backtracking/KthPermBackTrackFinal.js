// This is the most optimised solution with backtracking as I am not finding every possible iteration

function getPermutation(n, k) {
	var possible = [];
	var numberOfPermutations = { '-1': 0, '0': 1 };

	var factorial = 1;
	for (var i = 1; i <= n; i++) {
		factorial *= i;
		numberOfPermutations[i.toString()] = factorial;
		possible.push(i);
	}

	var ans = solve([], 0, k, possible, numberOfPermutations);

	return ans.join('');
}

function solve(permutation, currentRank, k, remaining, numPermutations) {
	for (var t = 0; t < remaining.length; t++) {
		var e = remaining[t];
		if (e) {
			var positionsLeft = remaining.length - permutation.length - 1;
			var tempRank = currentRank + numPermutations[positionsLeft.toString()];
			if (tempRank >= k) {
				permutation.push(e);
				remaining[t] = null;
				solve(permutation, currentRank, k, remaining, numPermutations);
			} else {
				currentRank = tempRank;
			}
		}
	}
	return permutation;
}

var answer = getPermutation(2, 2);
// var answer = getPermutation(4, 19);
console.log(answer);
