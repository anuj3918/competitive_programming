function fractionToDecimal(A, B) {
	var negativeAnswer = false;

	if (A < 0 || B < 0) {
		if (A < 0) {
			negativeAnswer = !negativeAnswer;
		}

		if (B < 0) {
			negativeAnswer = !negativeAnswer;
		}
		A = A < 0 ? A * -1 : A;
		B = B < 0 ? B * -1 : B;
	}
	var tempA = A;
	var decimal = '';
	var integralPart = '',
		fractionPart = '';
	if (A % B === 0) {
		decimal = A / B;
		return decimal.toString();
	}

	if (A > B) {
		var quotient = parseInt(A / B, 10).toString();
		integralPart += quotient + '.';
		A = (A % B) * 10;
	} else {
		integralPart = '0.';
		A = A * 10;
		while (A < B) {
			integralPart += '0';
			A = A * 10;
		}
	}

	// console.log(integralPart, fractionPart, A, B);

	var recurring = '';
	var pos = 0;
	var hash = {};

	while (A % B !== 0) {
		if (hash[A.toString()] === undefined) {
			hash[A.toString()] = pos;
			pos++;
		} else {
			// console.log(A.toString());
			// console.log('from position: ', hash[A.toString()]);
			recurring = fractionPart.substring(hash[A.toString()], fractionPart.length);
			break;
		}
		var quotient = parseInt(A / B, 10).toString();
		fractionPart += quotient;
		A = (A % B) * 10;
		// console.log('\n', fractionPart, A, hash);
	}

	if (recurring.length) {
		// console.log('recurring is : ', recurring);
		fractionPart = fractionPart.substring(0, fractionPart.length - recurring.length);
		fractionPart = fractionPart + '(' + recurring + ')';
	} else {
		fractionPart += parseInt(A / B, 10).toString();
	}

	decimal += integralPart + fractionPart;

	if (negativeAnswer) {
		return '-' + decimal;
	}
	return decimal;
}

var answer = fractionToDecimal(1, 2147483648);

// var answer = fractionToDecimal(2, 3);
// var answer = fractionToDecimal(22, 7);
// var answer = fractionToDecimal(-1, -2);

// var answer = fractionToDecimal(25, 16);
// var answer = fractionToDecimal(1156, 990);
// var answer = fractionToDecimal(945, 103);

console.log(answer);
// fractionToDecimal(22, 7);
