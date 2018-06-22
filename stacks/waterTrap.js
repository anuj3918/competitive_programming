function waterTrap(A) {
	var left = 0;
	var slen = -1;
	var stack = [];
	var totalWater = 0;

	for (i = 0; i < A.length; i++) {
		// console.log(A[i], totalWater);
		var e = A[i];
		if (slen === -1) {
			left = A[i];
			stack.push(A[i]);
			slen++;
		}

		if (A[i] >= left) {
			// fill walls in the stack
			stack.push(A[i]);
			slen++;
			// For a case like [3, 2, 1, 5], we see that 5 > 3 (left)
			// We fill all the walls till the stack gets empty and then move forward
			var smallerWall = Math.min(left, A[i]);
			while (stack.length) {
				var wall = stack.pop();
				slen--;
				if (wall <= smallerWall) {
					totalWater += smallerWall - wall;
				}
			}
			stack.push(A[i]);
			slen++;
			left = A[i];
		}

		if (A[i] < left) {
			if (A[i] <= stack[slen]) {
				stack.push(A[i]);
				slen++;
			} else {
				// This is important for [3,1,2,1], if Array ends but left stays at 3
				// When we get 1 after 3, we see that it is less than 3, so stack becomes [3,1]
				// Now when we get 2, we check that 2 < 3 but 2 > 1 (last element of stack)
				// So we fill the water in the stack and make stack = [3,2,2]
				var k = slen;
				while (stack[k] < A[i]) {
					totalWater += A[i] - stack[k];
					stack[k] = A[i];
					k--;
				}
				stack.push(A[i]);
				slen++;
			}
		}
	}
	return totalWater;
}

// var input = [3, 1, 0, 1, 2, 1, 4, 0, 1];
var input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// var input = [1, 2, 3];
// var input = [3, 2, 3, 3];

var answer = waterTrap(input);

console.log(answer);
