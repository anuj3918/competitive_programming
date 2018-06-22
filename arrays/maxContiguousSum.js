function maxSum(A) {
	if (A.length == 1) {
		return A[0];
	}
	var current = A[0];
	var max = A[0];
	for (var i = 1; i < A.length; i++) {
		var element = A[i];
		current += element;
		console.log(element, current);
		if (element >= current) {
			if (element >= max) {
				max = element;
			}
			current = element;
		} else if (current >= max) {
			max = current;
		}
	}

	return max;
}

// var input = [-3, -1, 5, -20, -3, 7, -20];
// var input = [-63, 80, 65, 63, -452, -462, -449, 87, -319, 60, 60, 60, 60, 60];
var input = [97, 0, -461, -125, -404, -59, -322, -495, -288, -341, -449, -313, -192, -214, -389, -202, -183, -72, -416, -455, -187, -242, -416, 39, -198, -338, -465, -248, -25, -398, -97, -461, -214, -423, -407, -77, -190, -67, -178, -410, -160, 72, -350, -31, -85, -247, -319, -462, -303, -48, -354, -110, 17, 60, 19, 80, -218, -28, -426, -366, -140, 50];
var answer = maxSum(input);
console.log(answer);
