var maxAreaOfIsland = function(grid, x, y, currentArea) {
	var r = grid.length;
	var c = grid[0].length;
	if (grid[x][y] === 1) {
		var up = undefined,
			down = undefined,
			right = undefined,
			left = undefined;
		if (x >= 1) {
			up = grid[x - 1][y];
		}
		if (y >= 1) {
			left = grid[x][y - 1];
		}
		if (y <= c - 2) {
			right = grid[x][y + 1];
		}
		if (x <= r - 2) {
			down = grid[x + 1][y];
		}

		grid[x][y] = -1;

		if (left === 1) {
			currentArea = maxAreaOfIsland(grid, x, y - 1, currentArea);
		}
		if (right === 1) {
			currentArea = maxAreaOfIsland(grid, x, y + 1, currentArea);
		}
		if (up === 1) {
			currentArea = maxAreaOfIsland(grid, x - 1, y, currentArea);
		}
		if (down === 1) {
			currentArea = maxAreaOfIsland(grid, x + 1, y, currentArea);
		}
		currentArea++;
	}

	return currentArea;
};

// var inp = [
// 	[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
// 	[0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
// 	[0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
// ];

var inp = [[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 1, 1], [0, 0, 0, 1, 1]];
var maxArea = 0;
var rows = inp.length;
var cols = inp[0].length;
for (var i = 0; i < rows; i++) {
	for (var j = 0; j < cols; j++) {
		var area = maxAreaOfIsland(inp, i, j, 0);
		if (area > maxArea) {
			maxArea = area;
		}
	}
}
console.log(inp);
console.log(maxArea);
