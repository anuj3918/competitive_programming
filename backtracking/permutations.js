module.exports = {
	//param A : array of integers
	//return a array of array of integers
	permute: function(A) {
		A.sort(function(a, b) {
			if (a < b) return -1;
			else if (a > b) return 1;
			else return 0;
		});
		var f = [];
		solve(A, f);
		return f;
	}
};

function solve(A, pos, perm, finalList) {
	// console.log('\n', pos, perm);
	if (pos >= A.length) {
		return;
	}

	for (var i = 0; i < A.length; i++) {
		var e = A[i];
		var permutation = perm.slice(0);
		if (permutation.indexOf(e) == -1) {
			//this check is although not very efficient
			permutation.push(e);
			if (permutation.length === A.length) {
				finalList.push(permutation);
			}
		}

		solve(A, pos + 1, permutation, finalList);
	}
}

var f = [];
solve([1, 2, 3], 0, [], f);
console.log(f);
