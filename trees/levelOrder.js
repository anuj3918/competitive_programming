function levelOrderTraversal(node) {
	var levelOrder = [];
	var root = node;
	var order = [node];
	var position = 0;

	while (position < order.length) {
		node = order[position];
		position++;
		levelOrder.push(node.data);
		if (node.left !== null) {
			order.push(node.left);
		}
		if (node.right !== null) {
			order.push(node.right);
		}
	}

	return levelOrder;
}
