module.exports = {
	//param A : array of integers
	//return a array of array of integers
	subsets: function(A) {
		var finalList = [];
		finalList.push([]);

		// This sorting is necessary, it is just to get output in correct lexical order
		// A.sort(function(a, b){
		//     if(a < b){
		//         return -1;
		//     } else if(a > b){
		//         return 1;
		//     } else {
		//         return 0;
		//     }
		// })

		solve(A, 0, [], finalList);
		return finalList;
	}
};

function solve(A, i, s, finalList) {
	if (i >= A.length) {
		return;
	}

	// Create a copy of subset we have till now
	var subset = s.slice(0);

	// Add element to subset
	var element = A[i];
	subset.push(element);

	// Proceed taking the element in subset
	finalList.push(subset);
	solve(A, i + 1, subset, finalList);

	// Proceed without taking the element in subset
	solve(A, i + 1, s, finalList);
}

var f = [];
solve([12, 13], 0, [], f);
console.log(f);
