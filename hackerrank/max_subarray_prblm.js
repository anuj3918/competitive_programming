function maximumSum(a, m) {
	a = a.map(function(e) {
		return e % m;
	});

	var min = null;
	for (var i = 0; i < a.length; i++) {
		if (a[i] != 0 && min > a[i]) {
			min = a[i];
		}
	}

	if (min == null) {
		min = 0;
	}

	// Complete this function
	var maxed = 0;
	var final = [0];

	for (var i = 0; i < a.length; i++) {
		var element = a[i] % m;
		if (element !== 0) {
			for (var j = 0; j < final.length; j++) {
				var subset = final[j];
				final[j] = (final[j] + element) % m;
				if (final[j] > maxed) {
					maxed = final[j];
					if (maxed + min > m) {
						return maxed;
					}
				}
			}
		}

		final.push(0);
	}

	return maxed;
}

// function maximumSum(a, m) {
// 	// Complete this function
// 	var maxed = 0;
// 	var final = [0];

// 	for (var i = 0; i < a.length; i++) {
// 		var element = a[i];
// 		for (var j = 0; j < final.length; j++) {
// 			var subset = final[j];
// 			final[j] = (final[j] + element) % m;
// 			if (final[j] > maxed) {
// 				maxed = final[j];
// 			}
// 		}
// 		final.push(0);
// 	}

// 	return maxed;
// }

// function maximumSum(a, m) {
// 	// Complete this function
// 	var maxed = {
// 		final: 0
// 	};

// 	return subset(a, m, 0, 0, maxed);
// 	return maxed.final;
// }

// function subset(a, m, pos, subsetSum, maxSum) {
// 	// console.log('subsetSum: ', subsetSum);
// 	if (maxSum.final < subsetSum) {
// 		maxSum.final = subsetSum;
// 	}

// 	if (pos >= a.length) {
// 		return;
// 	}

// 	var element = a[pos];

// 	// take the element
// 	subset(a, m, pos + 1, (subsetSum + element) % m, maxSum);

// 	// don't take the element
// 	subset(a, m, pos + 1, element % m, maxSum);
// }

// function maximumSum(a, m) {
// 	// Complete this function
// 	var maximum = 0;
// 	var subsetLen = a.length;

// 	while (subsetLen > 0) {
// 		for (var i = 0; i <= a.length - subsetLen; i++) {
// 			var subsetSum = 0;
// 			for (var j = 0; j < subsetLen; j++) {
// 				subsetSum = (subsetSum + a[i + j]) % m;
// 				if (subsetSum > maximum) {
// 					maximum = subsetSum;
// 				}
// 			}
// 		}
// 		subsetLen--;
// 	}
// 	return maximum;
// }

// var ans = maximumSum([3, 3, 9, 9, 5], 7);
var ans = maximumSum([30, 20, 4, 35], 40);

console.log(ans);
