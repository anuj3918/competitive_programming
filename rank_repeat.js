function rank(input_A) {
	var A = input_A.split('');
	var totalRank = 0;
	var placesLeft = A.length - 1;
	var x = Number.MAX_SAFE_INTEGER + 1;
	while (placesLeft >= 0) {
		var ch = A[0];
		var occurences = {};
		for (var i = 1; i < A.length; i++) {
			var e = A[i];
			if (occurences[e]) {
				occurences[e] += 1;
			} else {
				occurences[e] = 1;
			}
		}

		var duplicateElementList = [];
		for (var key in occurences) {
			if (occurences[key] > 1) {
				duplicateElementList.push(occurences[key]);
			}
		}

		var uniqueChars = {};
		for (var l = 0; l < A.length; l++) {
			var ele = A[l];
			if (uniqueChars[ele]) {
				uniqueChars[ele] += 1;
			} else {
				uniqueChars[ele] = 1;
			}
		}
		var uniqueCharsList = Object.keys(uniqueChars);
		uniqueCharsList = uniqueCharsList.sort(function(a, b) {
			if (a > b) return 1;
			return -1;
		});

		var smaller_till = uniqueCharsList.indexOf(ch);
		var smaller = uniqueCharsList.slice(0, smaller_till);

		// console.log('uniqueChars: ', uniqueChars);

		// console.log(A, ch, uniqueCharsList, smaller_till, placesLeft, smaller);
		if (!(placesLeft === 0 || smaller_till === 0)) {
			for (var m = 0; m < smaller.length; m++) {
				var s = smaller[m];
				var t = JSON.parse(JSON.stringify(uniqueChars));
				t[s] -= 1;
				var duplicateproduct = 1;
				for (var g in t) {
					var duplicate = t[g];
					var f = 1;
					for (var k = 1; k <= duplicate; k++) {
						f = f * k;
					}
					duplicateproduct = duplicateproduct * f;
					if (duplicateproduct > x) {
						console.log('out of bounds');
					}
				}

				var divisionDone = false;

				var factorial = 1;

				for (var j = 1; j <= placesLeft; j += 1) {
					if (factorial % duplicateproduct === 0 && !divisionDone) {
						factorial /= duplicateproduct;
						divisionDone = true;
					}
					factorial = (factorial * j) % 1000003;
				}
				if (factorial % duplicateproduct === 0 && !divisionDone) {
					factorial /= duplicateproduct;
					divisionDone = true;
				}
			}

			// console.log('permutations', factorial);

			//   if (factorial > x) {
			//     console.log("factorial out of bounds");
			//   }
			totalRank = totalRank + factorial % 1000003;
		}
		// if (totalRank > x) {
		//   console.log("out of bounds");
		// }
		// console.log('totalRank: ', totalRank);
		// console.log('\n');
		A.splice(0, 1);
		placesLeft -= 1;
	}

	return 1 + totalRank % 1000003;
}

// console.log(rank('VIEW'));
// console.log("\n");
// console.log(rank("CADB"));
// console.log(rank('UJSQEGYMRLOCWDFVXHZT'));
console.log(rank('sadasdsasassasas'));
