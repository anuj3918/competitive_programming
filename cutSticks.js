process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0;

process.stdin.on('data', function(data) {
	input_stdin += data;
});

process.stdin.on('end', function() {
	input_stdin_array = input_stdin.split('\n');
	main();
});

function readLine() {
	return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function cutTheSticks(arr) {
	// Complete this function
	var totalSticksCut = [];
	var sticksCut = 0;
	var smallest = 100000;

	while (smallest !== 0) {
		// count++;
		var allZero = true;
		smallest = 100000;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] > 0 && arr[i] < smallest) {
				smallest = arr[i];
			}

			if (arr[i] !== 0) {
				allZero = false;
			}
		}
		console.log('\n', arr, allZero);
		console.log('smallest: ', smallest);
		if (allZero === false) {
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] > 0) {
					// console.log('cutting: ', arr[i]);
					arr[i] = arr[i] - smallest;
					sticksCut++;
				}
			}
			if (sticksCut !== 0) {
				totalSticksCut.push(sticksCut);
				// console.log(totalSticksCut);
			}
			sticksCut = 0;
		} else {
			break;
		}
	}
	console.log('returning', totalSticksCut);
	return totalSticksCut;
}

cutTheSticks([5, 4, 4, 2, 2, 8]);

// function main() {
// 	var n = parseInt(readLine());
// 	arr = readLine().split(' ');
// 	arr = arr.map(Number);
// 	var result = cutTheSticks(arr);
// 	console.log(result.join('\n'));
// }
