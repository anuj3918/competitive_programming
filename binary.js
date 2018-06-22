function binary(A) {
	if (A === 0) {
		return '0';
	}
	var str = '';
	while (A >= 1) {
		var rem = A % 2;
		str = rem.toString() + str;
		A = Math.floor(A / 2);
	}
	return str;
}

binary(0);
