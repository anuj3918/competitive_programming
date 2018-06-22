function preOrderTraversal(n) {
	var preOrder = [];
	var visited = {};
	var root = n;
	var stack = [root];
	var position = 0;

	while (stack.length) {
		var node = stack[stack.length - 1];

		// console.log('\n', order);
		// if (node && visited[node.left.toString()] == undefined) {
		// 	visited[node.left.toString()] = 1;
		// }

		if (node.left && visited[node.left.data.toString()] != 1) {
			console.log('pushing1', node.left);
			stack.push(node.left);
		} else {
			node = stack.pop();
			console.log(node.data, node);

			if (!visited[node.toString()]) {
				visited[node.data.toString()] = 1;
				preOrder.push(node.data);
				console.log(preOrder);
			}

			if (node.right && !visited[node.right.data.toString()]) {
				console.log('pushing2', node.right);
				stack.push(node.right);
			}
		}
	}
	return preOrder;
}

// Definition for a  binary tree node
function TreeNode(data) {
	this.data = data;
	this.left = null;
	this.right = null;
}

var n1 = new TreeNode(1);
var n2 = new TreeNode(2);
var n3 = new TreeNode(3);
var n4 = new TreeNode(4);
var n5 = new TreeNode(5);
var n6 = new TreeNode(6);
var n7 = new TreeNode(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n5.left = n6;
n6.left = n7;

var answer = preOrderTraversal(n1);
console.log(answer);
