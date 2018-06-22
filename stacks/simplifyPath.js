function simplifyPath(A) {
	var tempA = A.substring(1, A.length);
	var folders = tempA.split('/');
	// console.log(folders);
	var stack = [];

	for (var i = 0; i < folders.length; i++) {
		var folder = folders[i];
		if (folder == '..' && stack.length) {
			stack.pop();
		} else if (folder !== '..' && folder !== '.' && folder !== '') {
			stack.push(folder);
		}
	}

	if (stack.length === 0) {
		return '/';
	}

	var path = '';
	for (i = 0; i < stack.length; i++) {
		path += '/' + stack[i];
	}
	return path;
}

// var answer = simplifyPath('/src/../docker/./home/');
var answer = simplifyPath('/../');

console.log(answer);
