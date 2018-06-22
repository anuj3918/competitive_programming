// take example of 5, 3, 1
function main(A, B, d) {
	if (A == d || B == d || d == 0) {
		return true;
	}
	if (d > A + B) {
		return false;
	}
	if (A < B) {
		var temp = A;
		A = B;
		B = temp;
	}

	var m = {};
	m[A + B] = true;
	var allMeasures = [];
	// start with 5+3 as the measure
	var newMeasure = fill(A + B, B, A + B, m);
	while (newMeasure !== null) {
		//till the time you get newMeasures
		if (!m[newMeasure.toString()]) {
			m[newMeasure.toString()] = true;
		}
		// if (newMeasure === d) {
		// 	console.log(m);
		// 	return true;
		// }
		newMeasure = fill(A, B, newMeasure, m);
	}

	console.log(m);
	if (m[d]) {
		return true;
	}

	return false;
}

// B bucket will always be smaller
function fill(A, B, measure, m) {
	var waterInA = 0,
		waterInB = 0;
	if (measure < B) {
		// if measure < B, then take water as (measure,0)
		waterInA = A + B;
		waterInB = measure;
	} else if (measure >= B) {
		// if measure < B, then take water as (8,measure)
		waterInA = measure;
		waterInB = 0;
	}

	var spaceInA = A - waterInA;
	var spaceInB = B - waterInB;

	// Now pour water from A to B, and see if you get a new measure in the bucket A
	waterInA = waterInA - spaceInB;
	if (!m[waterInA.toString()]) {
		return waterInA;
	}

	return null;
}

// var ans = main(22003, 31237, 1);
// var ans = main(104693, 104701, 324244);

// var ans = main(597, 500, 1);

// var ans = main(1, 2, 3);
// var ans = main(579, 593, 444);
var ans = main(5, 3, 1);
// var ans = main(15, 13, 1);

// var ans = main(67, 61, 9);

console.log(ans);
