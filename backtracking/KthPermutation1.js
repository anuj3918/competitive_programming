module.exports = {
	//param A : integer
	//param B : integer
	//return a strings
	getPermutation: getPermutation
};

function getPermutation(n, k) {
	var f = [];
	solve(n, k, 0, [], f, {});
	return f.pop().join('');
}

function solve(n, k, pos, permutation, final, selected) {
	console.log('\n', permutation, final.length);
	// console.log(selected);
	if (permutation.length === n) {
		final.push(permutation);
		return false;
	}

	if (final.length >= k) {
		return true;
	}

	for (var d = 1; d <= n; d++) {
		var digit = d.toString();
		if (!selected[digit]) {
			var s = Object.assign({}, selected);
			s[digit] = true;
			var temp = permutation.slice(0);
			temp.push(digit);

			var stop = solve(n, k, pos + 1, temp, final, s);

			if (stop) {
				return final;
			}
		}
	}
}

console.time('a');
var ans = getPermutation(1, 1);
console.log(ans);
console.timeEnd('a');
