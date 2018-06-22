function triplets(A) {
	A = A.map(function(a) {
		return parseFloat(a);
	});
	var final = [[A[0]], []];
	// console.log(final);
	for (var i = 1; i < A.length; i++) {
		// console.log('\n');
		var e = A[i];
		var tempList = [];
		for (var j = 0; j < final.length; j++) {
			var set = final[j];

			// console.log(set);
			if (set.length < 3) {
				var temp = set.slice(0);
				temp.push(e);
				tempList.push(temp);
			}

			tempList.push(set);
		}
		final = tempList;
	}
	final = final.filter(function(l) {
		var sum = l.reduce(function(total, b) {
			return total + b;
		}, 0);
		// console.log(l, sum);
		if (l.length === 3 && sum > 0 && sum < 2) {
			return l;
		}
		return null;
	});

	return final;
}

// console.log(triplets([1, 2, 3, 4, 5, 6]));
console.log(triplets(['2.673662', '2.419159', '0.573816', '2.454376', '0.403605', '2.503658', '0.806191']));
