function solve(A) {
	for (var i = A.length - 1; i >= 0; i--) {
		var str = A.substring(0, i + 1);
		var isPalindrome = true;
		for (var j = 0; j < str.length; j++) {
			if (str[j] !== str[str.length - j - 1]) {
				isPalindrome = false;
				break;
			}
		}
		if (isPalindrome) {
			return A.length - i - 1;
		}
	}
}

ABC;
