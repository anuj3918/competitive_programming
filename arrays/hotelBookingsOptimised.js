function hotel(A, B, C) {
	var Asorted = true;
	for (var i = 0; i < A.length - 1; i++) {
		if (A[i] > A[i + 1]) {
			Asorted = false;
			break;
		}
	}
	if (!Asorted) {
		A = A.sort(function(a, b) {
			if (a < b) {
				return -1;
			} else {
				return 1;
			}
		});
	}

	var Bsorted = true;
	for (i = 0; i < B.length - 1; i++) {
		if (B[i] > B[i + 1]) {
			Bsorted = false;
			break;
		}
	}
	if (!Bsorted) {
		B = B.sort(function(a, b) {
			if (a < b) {
				return -1;
			} else {
				return 1;
			}
		});
	}

	var active = 0;
	var s = 0,
		e = 0;
	while (s < A.length && e < B.length) {
		if (A[s] < B[e]) {
			active++;
			// console.log('start:', A[s], 'active: ', active);
			if (active > C) {
				return false;
			}
			s++;
		} else {
			active--;
			// console.log('end: ', B[e], 'active: ', active);
			e++;
		}

		// console.log('\n');
	}

	return true;

	// console.log(bookings);
}

// var answer = hotel([9, 47, 17, 39, 35, 35, 20, 18, 15, 34, 11, 2, 45, 46, 15, 33, 47, 47, 10, 11, 27], [32, 82, 39, 86, 81, 58, 64, 53, 40, 76, 40, 46, 63, 88, 56, 52, 50, 72, 22, 19, 38], 16);
// var answer = hotel([1, 2, 5, 9], [2, 6, 8, 10], 3);
var answer = hotel([40, 18], [45, 43], 1);
// var answer = hotel([40, 50], [40, 50], 1);

console.log(answer);
