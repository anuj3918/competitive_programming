// Definition for singly-linked list.
function Node(data) {
	this.data = data;
	this.next = null;
}

function lPalin(A) {
	var totalNodes = 0;
	tempA = A;
	while (tempA !== null) {
		totalNodes++;
		tempA = tempA.next;
	}

	if (totalNodes == 1) {
		return 1;
	}
	if (totalNodes == 2) {
		var secondHalf = A.next;
		if (A.data !== secondHalf.data) {
			return 0;
		} else {
			return 1;
		}
	}

	if (totalNodes % 2 == 1) {
		mid = (totalNodes - 1) / 2;
	} else {
		mid = totalNodes / 2;
	}

	var count = 0;
	tempA = A;
	while (count < mid) {
		count++;
		tempA = tempA.next;
	}

	var prev = tempA;
	var curr = tempA.next;
	var next = curr.next;

	// Reverse the latter half
	while (curr !== null) {
		curr.next = prev;
		if (next !== null) {
			prev = curr;
			curr = next;
			next = next.next;
		} else {
			break;
		}
	}

	// Store the end of latter half
	var reversedListHead = curr;
	var normalListHead = A;
	count = 0;
	while (count < mid) {
		// console.log('checking', normalListHead.data, reversedListHead.data);
		if (normalListHead.data !== reversedListHead.data) {
			return 0;
		}
		count++;
		normalListHead = normalListHead.next;
		reversedListHead = reversedListHead.next;
	}

	return 1;
}

var inp = [1, 2, 3, 4, 7, 2, 1];

var list = new Node(inp[0]);
var ptr = list;

for (var i = 1; i < inp.length; i++) {
	var newNode = new Node(inp[i]);
	ptr.next = newNode;
	ptr = newNode;
}

console.log(lPalin(list));

module.exports = {
	//param A : head node of linked list
	//return an integer
	lPalin: lPalin
};
