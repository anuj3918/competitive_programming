function isPalindrome(A) {
	var s = A.split('').filter(function(e) {
		var ascii = e.charCodeAt();
		if ((ascii >= 48 && ascii <= 57) || (ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
			return true;
		}
	});

	s = s.map(function(e) {
		return e.toLowerCase();
	});
	for (var i = 0; i <= s.length / 2; i++) {
		// console.log(s[i], s[s.length - i]);
		if (s[i] !== s[s.length - i - 1]) {
			return 0;
		}
	}
	return 1;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
