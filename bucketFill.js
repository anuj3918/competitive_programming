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
	m[0] = true;
	m[A] = true;
	m[B] = true;
	m[A - B] = true;
	var allMeasures = [];
	var newMeasure = fill(A, B, A - B, m);
	while (newMeasure !== null) {
		if (!m[newMeasure.toString()]) {
			m[newMeasure.toString()] = true;
		}
		if (newMeasure === d) {
			return true;
		}
		newMeasure = fill(A, B, newMeasure, m);
	}

	var possibleMeasures = Object.keys(m).map(function(k) {
		return parseInt(k);
	});

	for (var i = 0; i < possibleMeasures.length; i++) {
		for (var j = 0; j < possibleMeasures.length; j++) {
			if (i !== j && possibleMeasures[i] + possibleMeasures[j] === d) {
				return true;
			}
		}
	}
	return false;
}

// B bucket will always be smaller
function fill(A, B, measure, m) {
	// console.log(A, B, measure, m);
	var waterInA = 0,
		waterInB = 0;
	if (measure < B) {
		waterInA = A;
		waterInB = measure;
	} else if (measure >= B) {
		waterInA = measure;
		waterInB = 0;
	}

	var spaceInA = A - waterInA;
	var spaceInB = B - waterInB;

	// Now pour water from A to B
	waterInA = waterInA - spaceInB;
	if (!m[waterInA.toString()]) {
		return waterInA;
	}

	return null;
}

// var ans = main(22003, 31237, 1);
var ans = main(104693, 104701, 324244);

// var ans = main(597, 500, 1);

// var ans = main(1, 2, 3);
// var ans = main(579, 593, 444);
// var ans = main(5, 3, 1);
// var ans = main(15, 13, 1);

// var ans = main(67, 61, 9);

console.log(ans);
