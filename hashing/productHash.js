function productHash(A) {
	var str = A.toString();
	var digitsLen = str.length;
	var hash = {};
	var subLen = 1;
	while (subLen <= digitsLen) {
		// console.log('\n subLen is :', subLen);
		for (var i = 0; i <= digitsLen - subLen; i++) {
			var product = str
				.substring(i, i + subLen)
				.split('')
				.reduce(function(x, y) {
					return parseInt(x, 10) * parseInt(y, 10);
				});
			// console.log('product is : ', product);
			if (hash[product.toString()]) {
				return 0;
			} else {
				hash[product.toString()] = true;
			}
		}
		subLen++;
	}
	return 1;
}

// console.log(productHash(23));
console.log(productHash(3846));
