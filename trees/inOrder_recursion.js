function Node(data) {
	this.data = data;
	this.left = null;
	this.right = null;
}

var root = new Node(1);

var n1 = new Node(2);
root.left = n1;

var n2 = new Node(3);
root.right = n2;

var n3 = new Node(4);
n2.left = n3;

var n4 = new Node(5);
n3.right = n4;

var preOrderTraversal = [];
var answer = solve(root);

console.log(answer);

function solve(n) {
	var node = n;
	if (node !== null) {
		if (node.data) {
			preOrderTraversal.push(node.data);
		}

		if (node.left) {
			solve(node.left);
		}

		if (node.right) {
			solve(node.right);
		}
	}

	return preOrderTraversal;
}
