module.exports = {
	//param A : integer
	//param B : integer
	//return a strings
	getPermutation: getPermutation
};

function getPermutation(n, k) {
	var f = [];
	solve(n, k, 0, '', f);
	return f.pop();
}

function solve(n, k, pos, permutation, final) {
	if (permutation.length === n) {
		final.push(permutation);
		return;
	}

	if (final.length >= k) {
		return true;
	}

	for (var d = 1; d <= n; d++) {
		var digit = d.toString();
		if (permutation.indexOf(digit) === -1) {
			var temp = permutation + digit;
			var stop = solve(n, k, pos + 1, temp, final);
			if (stop) {
				return final;
			}
		}
	}
}

console.time('a');
var ans = getPermutation(9, 10000);
console.log(ans);
console.timeEnd('a');
