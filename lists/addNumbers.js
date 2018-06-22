// Definition for singly-linked list.
function Node(data) {
	this.data = data;
	this.next = null;
}

function addNumbers(A, B) {
	var sum = 0;
	var carry = 0;
	var digit = null;

	var tempA = A;
	var tempB = B;

	var finalList = new Node();
	var ptr = finalList;
	var i = 0;
	while (tempA !== null || tempB !== null) {
		var digitA = 0,
			digitB = 0;
		if (tempA !== null) {
			digitA = tempA.data;
		}
		if (tempB !== null) {
			digitB = tempB.data;
		}
		sum = digitA + digitB + carry;
		digit = sum % 10;
		carry = Math.floor(sum / 10);
		if (i == 0) {
			ptr.data = digit;
		} else {
			var newNode = new Node(digit);
			ptr.next = newNode;
			ptr = newNode;
		}
		i++;
		if (tempA !== null) {
			tempA = tempA.next;
		}
		if (tempB !== null) {
			tempB = tempB.next;
		}
		console.log(digit, carry);
	}

	if (carry !== 0) {
		console.log('here');
		var newNode = new Node(carry);
		ptr.next = newNode;
		ptr = newNode;
	}

	return finalList;
}

var inp = [1];
var inp2 = [9, 9, 9];

var list = new Node(inp[0]);
var ptr = list;

for (var i = 1; i < inp.length; i++) {
	var newNode = new Node(inp[i]);
	ptr.next = newNode;
	ptr = newNode;
}

var list2 = new Node(inp2[0]);
var ptr2 = list2;

for (var i = 1; i < inp2.length; i++) {
	var newNode = new Node(inp2[i]);
	ptr2.next = newNode;
	ptr2 = newNode;
}

var list3 = addNumbers(list, list2);
while (list3 !== null) {
	console.log(list3.data);
	list3 = list3.next;
}
