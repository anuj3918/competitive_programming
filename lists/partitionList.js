// Definition for singly-linked list.
function Node(data) {
	this.data = data;
	this.next = null;
}

function partition(A, B) {
	var ptr1 = A;
	var firstSmall = null,
		lastSmall = null;

	while (ptr1 != null) {
		if (firstSmall == null && ptr1.data < B) {
			firstSmall = ptr1;
		}
		if (ptr1.data < B) {
			lastSmall = ptr1;
		}
		ptr1 = ptr1.next;
	}

	if (lastSmall == null) {
		return A;
	}

	var tempLast = lastSmall;

	var ptr2 = A;
	var ptr2_prev = A;
	// A = firstSmall;

	while (ptr2 != null && ptr2 != tempLast) {
		// console.log('\n');
		// console.log('ptr2: ', ptr2.data, 'lastsmall: ', lastSmall.data, 'ptr2_prev: ', ptr2_prev.data);
		if (ptr2.data >= B) {
			if (A != null && A == ptr2) {
				A = A.next;
			}
			var ptr2_next = ptr2.next;
			// if (ptr2_prev != null) {
			// ptr2_prev = ptr2;
			if (ptr2_prev == ptr2) {
				ptr2_prev = ptr2.next;
			} else {
				ptr2_prev.next = ptr2.next;
			}
			var lastSmall_next = lastSmall.next;
			lastSmall.next = ptr2;
			ptr2.next = lastSmall_next;
			ptr2 = ptr2_next;
			lastSmall = lastSmall.next;
			// }
		} else {
			ptr2_prev = ptr2;
			if (ptr2 != null) {
				ptr2 = ptr2.next;
			}
		}

		// var c = 0;
		// var p = A;
		// console.log('printing');
		// var s = '';
		// while (p != null && c < 10) {
		// 	s += p.data + ' -> ';
		// 	p = p.next;
		// 	c++;
		// }
		// console.log(s);
	}

	return A;
}

// var inp = [1, 4, 3, 2, 5, 2];
var inp = [5, 8, 1, 6];

var list = new Node(inp[0]);
var ptr = list;

for (var i = 1; i < inp.length; i++) {
	var newNode = new Node(inp[i]);
	ptr.next = newNode;
	ptr = newNode;
}

var answer = partition(list, 3);
var c = 0;
var p = answer;
console.log('printing');
var s = '';
while (p != null && c < 10) {
	s += p.data + ' -> ';
	p = p.next;
	c++;
}
console.log(s);
