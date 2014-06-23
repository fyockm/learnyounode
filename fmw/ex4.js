var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, file) {
	var lines = file.split('\n').length - 1;
	console.log(lines);
});
