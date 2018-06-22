function longestCommonPrefix(A) {
	var first = A[0];
	var pos = 1;
	var prefix = first.substring(0, pos);

	while (pos <= first.length) {
		for (var i = 1; i < A.length; i++) {
			prefix = first.substring(0, pos);
			// console.log('\n');
			// console.log(A[i].substring(0, pos), prefix);
			if (A[i].substring(0, pos) !== prefix) {
				// console.log('prefix ', prefix);
				return prefix.substring(0, prefix.length - 1);
			}
		}
		pos++;
	}

	return prefix;
}

var ans = longestCommonPrefix(['abcd', 'abcd', 'efgh']);
console.log(ans);
