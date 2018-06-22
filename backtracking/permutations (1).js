module.exports = {
	//param A : array of integers
	//return a array of array of integers
	permute: permute
};

function permute(A, N) {
	A.sort(function(a, b) {
		if (a < b) return -1;
		else if (a > b) return 1;
		else return 0;
	});
	var f = [];
	solve(A, 0, [], f, N);
	console.log('f is ', f);
	var minTime = 100000;

	for (var i = 0; i < f.length; i++) {
		var hash = {};
		var possibleRides = f[i];
		for (var j = 0; j < possibleRides.length; j++) {
			var ride = possibleRides[j];
			if (hash[ride.toString()]) {
				hash[ride.toString()] += ride;
			} else {
				hash[ride.toString()] = ride;
			}
		}

		var time = 0;
		for (var k in hash) {
			if (hash[k] >= time) {
				time = hash[k];
			}
		}

		if (time <= minTime) {
			minTime = time;
		}
	}
	// return f;
	return minTime;
}

function solve(A, pos, perm, finalList, Ntrips) {
	if (pos >= Ntrips) {
		return;
	}

	for (var i = 0; i < A.length; i++) {
		var e = A[i];
		var permutation = perm.slice(0);

		permutation.push(e);
		if (permutation.length === Ntrips) {
			finalList.push(permutation);
		}

		solve(A, pos + 1, permutation, finalList, Ntrips);
	}
}

// var input = [1, 2];
var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// var f = [];
// solve(input, 0, [], f, 4);
var answer = permute(input, 10);
console.log(answer);
// console.log(f);
