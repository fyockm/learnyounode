var es6 = require('./es6-2');

es6(process.argv[2], process.argv[3], function(err, list) {
	if (err) return console.error(err);
	list.forEach(function(file) {
		console.log(file);
	});
});
