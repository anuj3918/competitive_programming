function factors(cpyA, cpyB) {
	var A = cpyA;
	var B = cpyB;
	if (A < B) {
		var temp = B;
		B = A;
		A = temp;
	}

	while (A % B !== 0) {
		var divisor = A % B;
		var dividend = B;
		A = dividend;
		B = divisor;
	}

	var gcd = B;
	if (gcd === 1) {
		return cpyA;
	}

	A = cpyA;
	B = cpyB;

	var max_div = 1;
	var limitA = Math.sqrt(A);
	var A_factors = {};
	for (var j = 1; j <= limitA; j++) {
		if (A % j === 0) {
			if (!A_factors[j]) {
				A_factors[j] = 1;
			}
			var f = A / j;
			if (!A_factors[f]) {
				A_factors[f] = 1;
			}
		}
	}
	var factorsA = Object.keys(A_factors);
	factorsA = factorsA.map(function(e) {
		return parseInt(e, 10);
	});

	for (var i = factorsA.length - 2; i >= 0; i--) {
		var ele = factorsA[i];
		var checkB = B;
		// console.log('\n');
		// console.log(ele, checkB);
		if (ele < checkB) {
			var temp = checkB;
			checkB = ele;
			ele = temp;
		}

		while (ele % checkB !== 0) {
			var divisor = ele % checkB;
			var dividend = checkB;
			ele = dividend;
			checkB = divisor;
		}
		var gcd = checkB;
		// console.log('gcd: ', gcd);
		// console.log(max_div, factorsA[i]);
		if (gcd === 1) {
			if (factorsA[i] > max_div) {
				max_div = factorsA[i];
				// console.log('max div changed to: ', max_div);
			}
		}
	}

	return max_div;
}
console.log(factors(32, 15));
