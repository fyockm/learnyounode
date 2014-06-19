var http = require('http');
var async = require('async');

function get(url, cb) {
	http.get(url, function(resp) {
		var data = '';
		resp.setEncoding('utf8');
		resp.on("data", function(chunk) {
			data += chunk;
		});
		resp.on("end", function() {
			cb(null, data);
		});
		resp.on('error', console.error);
	});
}

async.map(process.argv.slice(2), get, function(err, results) {
	results.forEach(function(result) {
		console.log(result);
	});
});
