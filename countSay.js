function countAndSay(A) {
	var l = ['1'];
	var n = 0;
	while (n !== A - 1) {
		// console.log('\n');
		// console.log('n: ', n);
		var element = l[n].toString();
		var say = '';
		// console.log('element: ', element);
		for (var j = 0; j < element.length; ) {
			var count = 0;
			var coveredTill = j;
			// console.log('check: ', element[j]);
			for (var k = j; k < element.length; k++) {
				if (element[j] === element[k]) {
					count++;
					coveredTill = k;
				} else {
					coveredTill = k - 1;
					break;
				}
			}

			say = say + count.toString() + element[j].toString();
			j = coveredTill + 1;
			// console.log('j is: ', j);
		}
		// console.log('say: ', say);
		l.push(say.toString());
		n++;
	}
	return l[l.length - 1];
}

countAndSay(6);
