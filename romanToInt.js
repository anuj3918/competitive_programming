function romanToInt(A) {
	var d1 = {
		I: 1,
		II: 2,
		III: 3,
		IV: 4,
		V: 5,
		VI: 6,
		VII: 7,
		VIII: 8,
		IX: 9,
		X: 10
	};

	var d2 = {
		X: 10,
		XX: 20,
		XXX: 30,
		XL: 40,
		L: 50,
		LX: 60,
		LXX: 70,
		LXXX: 80,
		XC: 90,
		C: 100
	};

	var d3 = {
		C: 100,
		CC: 200,
		CCC: 300,
		CD: 400,
		D: 500,
		DC: 600,
		DCC: 700,
		DCCC: 800,
		CM: 900,
		M: 1000
	};

	var sum = 0;
	for (var i = A.length - 1; i >= 0; ) {
		var c = A[i];
		var temp = c;
		// console.log('temp: ', temp);
		while (d1[temp] || d2[temp] || d3[temp]) {
			i--;
			if (A[i]) {
				temp = A[i] + temp;
			} else {
				temp = 'Z' + temp;
			}

			// console.log('temp: ', temp);
			// console.log('i: ', i);
		}
		if (i >= -1) {
			// console.log(temp);
			c = temp.substring(1, temp.length);
		}

		// console.log('c: ', c);

		if (d1[c]) {
			// console.log('adding 1: ', d1[c]);
			sum += d1[c];
		} else if (d2[c]) {
			// console.log('adding 2: ', d2[c]);
			sum += d2[c];
		} else if (d3[c]) {
			// console.log('adding 3: ', d3[c]);
			sum += d3[c];
		}
	}
	// console.log('sum: ', sum);
	return sum;
}

romanToInt('CMVI');
