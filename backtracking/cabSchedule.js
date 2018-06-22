function schedule(A, K, N) {
	A.sort(function(a, b) {
		if (a < b) return -1;
		else if (a > b) return 1;
		else return 0;
	});
	var timeTable = [];
	for (var cab = 0; cab < K; cab++) {
		timeTable.push([]);
	}

	var currentTime = 0;
	var timeTaken = 0;

	for (var ride = 1; ride <= N; ride++) {
		var chosenRideIndex = -1;
		var timeToFinish = 1000000;
		var latestRideTime = 100000;
		for (var cab = 0; cab < K; cab++) {
			var cabRides = timeTable[cab];
			// console.log('cabrides: ', cabRides);
			var lastRide = cabRides[cabRides.length - 1];
			if (!lastRide) {
				lastRide = 0;
			}
			console.log('time to finish: ', lastRide, A[cab]);
			if (lastRide + A[cab] < timeToFinish) {
				timeToFinish = lastRide + A[cab];
				latestRideTime = lastRide;
				chosenRideIndex = cab;
			}
		}

		// console.log('chosenIndex: ', chosenRideIndex);
		// var rideFinal = timeTable[chosenRideIndex]
		timeTable[chosenRideIndex].push(latestRideTime + A[chosenRideIndex]);
		// console.log(timeTable);
	}
	console.log('\n', timeTable);
	var minTime = 0;
	for (var cab = 0; cab < timeTable.length; cab++) {
		var rides = timeTable[cab];
		if (rides.length) {
			var finalTime = rides[rides.length - 1];
			if (finalTime > minTime) {
				minTime = finalTime;
			}
		}
	}

	console.log(minTime);
}

schedule([2, 3, 4, 5, 6, 7], 6, 18);
