function hotel(A, B, C) {
	var bookings = [];
	for (var i = 0; i < A.length; i++) {
		bookings.push({
			start: A[i],
			end: B[i]
		});
	}

	bookings = bookings.sort(function(a, b) {
		if (a.start < b.start) {
			return -1;
		} else {
			return 1;
		}
	});

	var start_stack = [];
	var end_stack = [];

	for (i = 0; i < bookings.length; i++) {
		console.log(bookings[i]);
		console.log(start_stack);
		console.log(end_stack);
		console.log('updating');
		var start = bookings[i].start;
		var end = bookings[i].end;
		if (start - end === 0) {
			continue;
		}
		var j = 0;
		while (start >= end_stack[j]) {
			j++;
		}
		start_stack.splice(0, j);
		end_stack.splice(0, j);

		start_stack.push(start);
		// end_stack.push(end);
		j = end_stack.length - 1;
		while (end_stack[j] > end && j >= 0) {
			j--;
		}
		var left = end_stack.slice(0, j + 1);
		left.push(end);
		var right = end_stack.slice(j + 1, end_stack.length);
		end_stack = left.concat(right);
		// end_stack = end_stack.sort(function(a, b) {
		// 	if (a < b) {
		// 		return -1;
		// 	} else {
		// 		return 1;
		// 	}
		// });
		console.log(start_stack);
		console.log(end_stack);
		console.log('\n');
		if (start_stack.length > C) {
			return false;
		}
	}

	return true;

	// console.log(bookings);
}

// var answer = hotel([9, 47, 17, 39, 35, 35, 20, 18, 15, 34, 11, 2, 45, 46, 15, 33, 47, 47, 10, 11, 27], [32, 82, 39, 86, 81, 58, 64, 53, 40, 76, 40, 46, 63, 88, 56, 52, 50, 72, 22, 19, 38], 16);
var answer = hotel([1, 2, 5, 9], [11, 6, 8, 10], 3);
// var answer = hotel([40, 18], [40, 43], 1);
// var answer = hotel([40, 50], [40, 50], 1);

console.log(answer);
