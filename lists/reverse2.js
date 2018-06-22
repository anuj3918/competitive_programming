// Definition for singly-linked list.
function Node(data) {
	this.data = data;
	this.next = null;
}

function reverseBetween(A, B, C) {
	var diff = C - B;

	var ptr1 = A,
		ptr2 = A;
	var ptr1_prev = null,
		ptr2_next = ptr2.next;

	var shift = diff;
	while (shift > 0) {
		ptr2 = ptr2.next;
		ptr2_next = ptr2.next;
		shift--;
	}

	var position = 1;
	while (position != B) {
		ptr1_prev = ptr1;
		ptr1 = ptr1.next;
		ptr2 = ptr2.next;
		ptr2_next = ptr2.next;
		position++;
	}

	if (ptr1_prev != null) {
		ptr1_prev.next = ptr2;
	}

	var prev = ptr2_next;
	var curr = ptr1;
	var next = curr.next;

	while (curr != ptr2_next) {
		// console.log(prev.data, curr.data, next.data);
		curr.next = prev;
		prev = curr;
		curr = next;
		if (next != null) {
			next = next.next;
		}
	}

	if (B == 1) {
		return ptr2;
	}
	return A;
}

var inp = [1, 2, 3, 4, 5, 6, 7, 8];

var list = new Node(inp[0]);
var ptr = list;

for (var i = 1; i < inp.length; i++) {
	var newNode = new Node(inp[i]);
	ptr.next = newNode;
	ptr = newNode;
}

var answer = reverseBetween(list, 2, 8);
var count = 0;
var p = answer;
console.log('printing');
while (p != null && count < 10) {
	console.log(p.data);
	p = p.next;
	count++;
}
