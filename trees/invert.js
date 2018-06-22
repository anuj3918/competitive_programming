// Definition for a  binary tree node
function TreeNode(data) {
	this.data = data;
	this.left = null;
	this.right = null;
}

module.exports = {
	//param A : root node of tree
	//return an integer
	invertTree: invertTree
};

function invertTree(node) {
	var root = node;
	if (node !== null) {
		var temp = node.left;
		node.left = node.right;
		node.right = temp;
		node.left = invertTree(node.left);
		right = invertTree(node.right);
	}
	return root;
}

// function invertTree(node) {
// 	var root = node;
// 	order = [root];
// 	var position = 0;
// 	while (position < order.length) {
// 		node = order[position];
// 		position++;
// 		if (node.left !== null) {
// 			order.push(node.left);
// 		}
// 		if (node.right !== null) {
// 			order.push(node.right);
// 		}
// 		var temp = node.left;
// 		node.left = node.right;
// 		node.right = temp;
// 	}

// 	return root;
// }

// var n1 = new TreeNode(1);
// var n2 = new TreeNode(2);
// var n3 = new TreeNode(3);
// var n4 = new TreeNode(4);
// var n5 = new TreeNode(5);
// var n6 = new TreeNode(6);
// var n7 = new TreeNode(7);

// n1.left = n2;
// n1.right = n3;
// n2.left = n4;
// n2.right = n5;
// n3.left = n6;
// n3.right = n7;

// invertTree(n1);
