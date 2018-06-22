function greet(p1, p2) {
	return 'Welcome ' + p1 + this.name + p2;
}

var obj = {
	name: 'Gupta'
};

console.log(greet.call(obj, 'Mr. ', ' to BMS'));
