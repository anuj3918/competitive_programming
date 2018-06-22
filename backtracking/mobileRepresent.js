module.exports = {
	//param A : string
	//return a array of strings
	letterCombinations: letterCombinations
};

function letterCombinations(A) {
	var mappings = {
		'0': ['0'],
		'1': ['1'],
		'2': ['a', 'b', 'c'],
		'3': ['d', 'e', 'f'],
		'4': ['g', 'h', 'i'],
		'5': ['j', 'k', 'l'],
		'6': ['m', 'n', 'o'],
		'7': ['p', 'q', 'r', 's'],
		'8': ['t', 'u', 'v'],
		'9': ['w', 'x', 'y', 'z']
	};
	var answer = [];
	solve(A, mappings, 0, [], answer);
	return answer;
}

function solve(A, mappings, pos, combination, final) {
	if (combination.length === A.length) {
		final.push(combination.join(''));
		return;
	}

	var digit = A[pos];
	var respresentations = mappings[digit];
	for (var j = 0; j < respresentations.length; j++) {
		var temp = combination.slice(0);
		temp.push(respresentations[j]);
		solve(A, mappings, pos + 1, temp, final);
	}
}

var input = '121';
var ans = letterCombinations(input);
console.log(ans);
