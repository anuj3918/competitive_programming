function maxArea(A) {
	if (A.length === 1) {
		return 0;
	}
	var max = 0;

	var length = 0;
	var height = 0;
	var current_area = 0;

	var ptr1 = 0;
	var ptr2 = A.length - 1;
	while (ptr1 < ptr2) {
		length = ptr2 - ptr1;
		if (A[ptr1] <= A[ptr2]) {
			height = A[ptr1];
		} else {
			height = A[ptr2];
		}
		current_area = length * height;
		if (current_area > max) {
			max = current_area;
		}

		if (A[ptr1] <= A[ptr2]) {
			ptr1++;
		} else {
			ptr2--;
		}
	}

	return max;
}

maxArea([1, 2, 3, 1, 2]);
