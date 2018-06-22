function solve(A, B) {
	var list = [];
	for (var i = 1; i <= B; i++) {
		list.push([]);
	}

	var asc = true;
	var row = -1;
	for (var j = 0; j < A.length; j++) {
		if (asc) {
			row++;
		} else {
			row--;
		}
		// console.log('\n');
		// console.log(asc);
		// console.log('j: ', j, 'c: ', A[j]);
		// console.log('row: ', row);
		console.log(row);
		list[row].push(A[j]);

		if (!asc && row === 0) {
			asc = true;
		} else if (asc && row === B - 1) {
			asc = false;
		}
	}

	var str = '';
	for (var l = 0; l < B; l++) {
		str += list[l].join('');
	}
	console.log(str);
	return str;
}

solve('PAYPALISHIRING', 1);

// 1           7
// 2       6       8
// 3       5       9
//     4               10
