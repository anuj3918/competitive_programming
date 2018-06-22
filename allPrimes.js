function allPrimes(A) {
	var element;
	var init = [];
	for (var index = 0; index <= A; index++) {
		init.push(1);
	}

	init[0] = 0;
	init[1] = 0;

	for (var i = 2; i < Math.sqrt(init.length); i++) {
		element = i;
		var isPrime = init[i];
		if (isPrime == 1) {
			for (var j = 2; j * element <= A; j++) {
				init[element * j] = 0;
			}
		}
	}

	var finalPrimes = [];

	for (var index = 0; index < init.length; index++) {
		element = init[index];
		if (element === 1) {
			finalPrimes.push(index);
		}
	}

	return finalPrimes;
}

function allPrimesNormal(A) {
	let finalPrimes = [];
	for (let i = 2; i <= A; i++) {
		let isPrime = true;
		for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
			if (i % j === 0) {
				isPrime = false;
				break;
			}
		}
		if (isPrime) {
			finalPrimes.push(i);
		}
	}
	return finalPrimes;
}

console.time('allPrimes');
console.log(allPrimes(242458));
console.timeEnd('allPrimes');

// console.time("allPrimes");
// console.log(allPrimesNormal(242458));
// console.timeEnd("allPrimes");
