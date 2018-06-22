function A(cb1) {
	// some logic
	return cb1();
}

function B(cb2) {
	// some logic
	return cb2();
}

A(function(data1) {
	// some logic
	B(function(data2) {
		console.log('XYZ');
	});
});

function A() {
	return new Promise((resolve, reject) => {
		//some logic
		resolve(data1);
	});
}

function B() {
	return new Promise((resolve, reject) => {
		//some logic
		resolve(data2);
	});
}

A()
	.then(
		function(data1) {
			if (!data1) {
				// i want to call B since result === null
				return B();
			} else {
				console.log('End');
				return data1;
			}
		},
		function(err) {
			// A gave an error, call B
			return B();
		}
	)
	.then(data2 => {
		console.log('XYZ');
	})
	.catch(err => {
		console.log('err');
	});
