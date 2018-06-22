function solve(A, B, C) {
	if (B === 1) {
		var small = 0;
		for (var k = 0; k < A.length; k++) {
			if (A[k] < C) {
				small++;
			} else {
				break;
			}
		}
		return small;
	}

	var l = B;
	var highest = '',
		lowest = '';
	while (l > 0) {
		highest += A[A.length - 1];
		l--;
	}
	l = B;
	if (B === 1) {
		lowest = A[0];
	} else if (A[0] !== 0) {
		while (l > 0) {
			lowest += A[0];
			l--;
		}
	} else {
		lowest = A[1].toString();
		while (l > 1) {
			lowest += A[0];
			l--;
		}
	}

	if (B > C.toString().length || parseInt(lowest) > C) {
		return 0;
	}

	if (B < C.toString().length || parseInt(highest) < C) {
		if (B === 1) {
			return A.length;
		}
		var distinct = A.length;
		var answer = 1;
		var l = B;
		if (A[0] === 0) {
			answer = distinct - 1;
			while (l > 1) {
				answer *= distinct;
				l--;
			}
		} else {
			while (l > 0) {
				answer *= distinct;
				l--;
			}
		}
		return answer;
	}

	var totalRank = 0;
	var strC = C.toString();
	var inner = false;
	while (strC.length) {
		var d = parseInt(strC[0]);
		var smaller = 0;
		for (var k = 0; k < A.length; k++) {
			if (A[k] < d) {
				smaller++;
			} else {
				break;
			}
		}
		var rank = 0;
		if (smaller >= 1 && A[0] !== 0) {
			l = strC.length;
			rank = smaller;
			while (l > 1) {
				rank *= A.length;
				l--;
			}
			// console.log('rank: ', rank);
		}

		if (smaller >= 1 && A[0] === 0 && inner) {
			l = strC.length;
			rank = smaller;
			while (l > 1) {
				rank *= A.length;
				l--;
			}
		} else if (smaller >= 1 && A[0] === 0) {
			l = strC.length;
			rank = smaller - 1;
			while (l > 1) {
				rank *= A.length;
				l--;
			}
		}
		totalRank += rank;
		console.log(strC, smaller, rank);
		if (A.indexOf(d) > -1) {
			strC = strC.substring(1, strC.length);
			inner = true;
		} else {
			strC = '';
		}
	}
	return totalRank;
}

// console.log(solve([0, 1, 2, 5], 2, 21));
console.log(solve([2, 3, 5, 6, 7, 9], 5, 42950));
// console.log(solve([2, 9], 5, 17015));
