var fs = require('fs');
var path = require('path');

module.exports = function(fp, ext, cb) {
	fs.readdir(fp, function(err, list) {
		if (err) return cb(err);
		list = list.filter(function(file) {
			return path.extname(file) === '.' + ext;
		});
		cb(null, list);
	});

};
