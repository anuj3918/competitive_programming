// nd = 8
// drinks = ['1', '2', '3', '4', '5', '6', '7', '8'];
// nc = 4
// c = [
//     ['1', '2', '3'],
//     ['2', '3', '4'],
//     ['6', '7'],
//     ['1', '7', '8']
// ]

// make = ['2','7']

// common = {
//     '1': 2,
//     '2': 2,
//     '3': 2,
//     '4': 1,
//     '5': 0,
//     '6': 1,
//     '7': 2,
//     '8': 1
// }

// cc = {
//     c1: ,
//     c2:
// }

// --------------------------------------------

// -------
//      -----
//               -----
// --               -------

//   1 2 3 4 5 6 7 8
// 1 1
// 2 0
// 3 0
// 4 1

var cols = 3,
	rows = 3,
	mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// mat = [[1, 2], [4, 5]];

var i = 0,
	j = 0,
	direction = 'up';

for (var k = 0; k <= rows * cols; k++) {
	if (direction === 'up') {
		for (; i >= 0 && j < cols; j++, i--) {
			console.log(mat[i][j] + ' ');
			k++;
		}

		// Set i and j according to direction
		if (i < 0 && j <= cols - 1) {
			i = 0;
		}
		if (j == cols) {
			i = i + 2;
			j--;
		}
	}

	// If isUp = 0 then traverse up to down
	else {
		for (; j >= 0 && i < rows; i++, j--) {
			console.log(mat[i][j] + ' ');
			k++;
		}

		// Set i and j according to direction
		if (j < 0 && i <= rows - 1) j = 0;
		if (i == rows) {
			j = j + 2;
			i--;
		}
	}

	// Revert the direction
	direction = direction === 'up' ? 'down' : 'up';
}

ans = '1 2 4 7 5 3 6 8 9';
