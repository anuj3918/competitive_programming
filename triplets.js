function triplets(A) {
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
		if (l.length === 3) {
			return l;
		}
		return null;
	});

	return final;
}

console.log(triplets([1, 2, 3, 4, 5, 6]));
