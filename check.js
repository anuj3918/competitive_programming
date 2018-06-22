function solve(A) {
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
			var sumSet = set.reduce(function(total, b) {
				return total + b;
			}, 0);
			if (set.length === 3) {
				console.log(sumSet.toFixed(2), set);
			}
			if (set.length === 3 && sumSet < 2 && sumSet > 1) {
				return 1;
			}

			if (set.length <= 3) {
				var temp = set.slice(0);
				temp.push(e);
				tempList.push(temp);
			}

			tempList.push(set);
		}
		final = tempList;
	}

	return 0;
}

console.log(solve(['2.673662', '2.419159', '0.573816', '2.454376', '0.403605', '2.503658', '0.806191']));
