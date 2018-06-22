module.exports = {
	//param A : string
	//return an integer
	lengthOfLongestSubstring: lengthOfLongestSubstring
};

function lengthOfLongestSubstring(A) {
	var left = 0,
		right = 0,
		subsq = '',
		maxLen = 0,
		hash = {};

	while (right < A.length) {
		var element = A[right];
		if (hash[element] === undefined) {
			hash[element] = right;
			subsq += A[right];
			right++;
		} else {
			if (maxLen < subsq.length) {
				maxLen = subsq.length;
			}
			left = hash[element] + 1;
			right = left;
			subsq = '';
			hash = {};
		}
	}

	if (maxLen < subsq.length) {
		maxLen = subsq.length;
	}

	return maxLen;
}

// var input = 'abcabcdab';
// var input = 'abcdeff';
// var input = 'daedbc';
var input = 'adbcdefg';
console.log(lengthOfLongestSubstring(input));
