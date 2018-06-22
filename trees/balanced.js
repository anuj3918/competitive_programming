// Definition for a  binary tree node
function TreeNode(data) {
	this.data = data;
	this.left = null;
	this.right = null;
}

module.exports = {
	//param A : root node of tree
	//return an integer
	isBalanced: isBalanced
};

function isBalanced(A) {
	var depth = findDepth(A);
	// console.log(depth);
	if (depth === -1) {
		return false;
	}
	return true;
}

function findDepth(node) {
	// console.log('called: ', node.data);
	if (node == null) {
		return 0;
	}

	var leftDepth = 0;
	var rightDepth = 0;

	if (node.left !== null) {
		leftDepth = findDepth(node.left);
	}

	if (leftDepth === -1) {
		return -1;
	}

	if (node.right !== null) {
		rightDepth = findDepth(node.right);
	}

	if (rightDepth === -1) {
		return -1;
	}

	if (Math.abs(leftDepth - rightDepth) > 1) {
		return -1;
	}

	console.log(node.data, Math.max(leftDepth, rightDepth) + 1);
	return Math.max(leftDepth, rightDepth) + 1;
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

var answer = isBalanced(n1);
console.log(answer);
