function fill(A, B, d) {
	if (A == d || B == d || d == 0) {
		return true;
	}
	if (A < B) {
		var temp = A;
		A = B;
		B = temp;
	}
	// var d_digits = d.toString().length;
	// if (d < A && d < B) {
	// 	var t1 = 10;
	// 	for (var q = 1; q <= d_digits; q++) {
	// 		t1 *= 10;
	// 	}
	// 	A = A % t1;
	// 	B = B % t1;
	// }
	var measures = [0, B, A];
	var m = {};
	m[0] = true;
	m[A] = true;
	m[B] = true;
	m[A - B] = true;
	var newMeasures = [A - B];

	console.log('measures: ', measures);
	console.log('new-measures: ', newMeasures);

	for (var i = 0; i < newMeasures.length; i++) {
		for (var j = 2; j < 3; j++) {
			var waterInA = newMeasures[i];
			var waterInB = measures[j];
			// console.log('water in B: ', waterInB);

			var n1 = getNewMeasures([], waterInA, waterInB, A, B, m, d);
			if (n1 === true) {
				console.log(newMeasures);
				return true;
			}
			var n2 = getNewMeasures([], waterInB, waterInA, A, B, m, d);
			if (n2 === true) {
				console.log(newMeasures);
				return true;
			}
			newMeasures = newMeasures.concat(n1, n2);
		}
	}

	measures = measures.concat(newMeasures);
	console.log('\nfinally');
	console.log(measures);
	for (var i = 1; i < measures.length; i++) {
		for (var j = 1; j < measures.length; j++) {
			if (i !== j && measures[i] + measures[j] === d) {
				return true;
			}
		}
	}
	return false;
}

function getNewMeasures(ls, wA, wB, A, B, m, d) {
	// console.log('got m: ', m);
	// console.log('got ls: ', ls);
	if (wA == 0 || wB == 0) {
		var water = wA == 0 ? wB : wA;
		if (water < A && water < B) {
			return [];
		}
	}
	if (wA <= A && wB <= B) {
		// console.log('now checking: ', wA, ' , ', wB);
		// console.log(ls);
		var newMeasureFound = false;
		var spaceInA = A - wA;
		var spaceInB = B - wB;

		// pour water from A to B
		var waterA = wA - spaceInB >= 0 ? wA - spaceInB : 0;
		var waterB = wB + (spaceInB - wA) > 0 ? wA : spaceInB;
		if (!m[waterA]) {
			ls.push(waterA);
			m[waterA] = true;
			// console.log('newMeasures: ', ls);
			if (waterA === d) {
				console.log('Returning: ', ls);
				return true;
			}
		}
		if (!m[waterB]) {
			ls.push(waterB);
			m[waterB] = true;
			// console.log('newMeasures: ', ls);
			if (waterB === d) {
				console.log('Returning: ', ls);
				return true;
			}
		}

		// pour water from B to A
		waterA = wA + (spaceInA - wB) > 0 ? wB : spaceInA;
		waterB = wB - spaceInA >= 0 ? wB - spaceInA : 0;
		if (!m[waterA]) {
			ls.push(waterA);
			m[waterA] = true;
			// console.log('newMeasures: ', ls);
			if (waterA === d) {
				console.log('Returning: ', ls);
				return true;
			}
		}
		if (!m[waterB]) {
			ls.push(waterB);
			m[waterB] = true;
			// console.log('newMeasures: ', ls);
			if (waterB === d) {
				console.log('Returning: ', ls);
				return true;
			}
		}

		return ls;
	} else {
		return [];
	}
}
// var ans = fill(22003, 31237, 1);
// var ans = fill(15, 13, 1);

// var ans = fill(597, 500, 1);

// var ans = fill(1, 2, 3);
// var ans = fill(579, 593, 1);
var ans = fill(3, 37, 1);
// var ans = fill(67, 61, 9);

console.log(ans);
