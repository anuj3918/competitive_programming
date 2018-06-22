// Definition for singly-linked list.
function Node(data) {
	this.data = data;
	this.next = null;
}

function removeDuplicates(A) {
	var ptr = A;
	var prev = ptr;
	ptr = ptr.next;
	var current = ptr;
	while (ptr !== null && current !== null) {
		if (prev.data === current.data) {
			prev.next = current.next;
			current = current.next;
		} else {
			prev = current;
			current = current.next;
		}
	}

	return A;
}

var inp = [1, 2, 3, 4];

var list = new Node(inp[0]);
var ptr = list;

for (var i = 1; i < inp.length; i++) {
	var newNode = new Node(inp[i]);
	ptr.next = newNode;
	ptr = newNode;
}

var list3 = removeDuplicates(list);
while (list3 !== null) {
	console.log(list3.data);
	list3 = list3.next;
}
