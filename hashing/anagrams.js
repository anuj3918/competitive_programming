function anagrams(A) {
	var ana = {};
	var output = [];
	for (var i = 0; i < A.length; i++) {
		var str = A[i];
		var sorted = str
			.split('')
			.sort(function(a, b) {
				if (a < b) {
					return -1;
				} else if (a > b) {
					return 1;
				} else {
					return 0;
				}
			})
			.join('');

		if (!ana[sorted]) {
			ana[sorted] = [i + 1];
		} else {
			ana[sorted].push(i + 1);
			A[i] = null;
		}
	}

	// console.log(ana);

	for (var i = 0; i < A.length; i++) {
		var str = A[i];
		if (str) {
			var sorted = str
				.split('')
				.sort(function(a, b) {
					if (a < b) {
						return -1;
					} else if (a > b) {
						return 1;
					} else {
						return 0;
					}
				})
				.join('');

			output.push(ana[sorted]);
		}
	}

	// console.log(output);
	return output;
}

var input = ['cat', 'dog', 'tca', 'god'];
var answer = anagrams(input);
console.log(answer);
