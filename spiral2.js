module.exports = {
	//param A : integer
	//return a array of array of integers
	generateMatrix: function(n) {
		var r = n;
		var c = n;
		A = [];
		for (var i = 0; i < n; i++) {
			var ls = [];
			for (var j = 0; j < n; j++) ls.push(0);
			A.push(ls);
		}
		var tu = 0;
		var td = n - 1;
		var tl = 0;
		var tr = n - 1;

		var count = 1;
		while (count <= r * c) {
			// print top row
			if (count <= r * c) {
				for (var i = tl; i <= tr && count <= r * c; i++) {
					A[tu][i] = count;
					count++;
				}
				tu++;
			}

			// print right column
			if (count <= r * c) {
				for (var i = tu; i <= td && count <= r * c; i++) {
					A[i][tr] = count;
					count++;
				}
				tr--;
			}

			// print bottom row
			if (count <= r * c) {
				for (var i = tr; i >= tl && count <= r * c; i--) {
					A[td][i] = count;
					count++;
				}
				td--;
			}

			// print left column
			if (count <= r * c) {
				for (var i = td; i >= tu && count <= r * c; i--) {
					A[i][tl] = count;
					count++;
				}
				tl++;
			}
		}
		return A;
	}
};
