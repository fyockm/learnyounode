var http = require('http');

http.get(process.argv[2], function(resp) {
	var data = '';
	resp.setEncoding('utf8');
	resp.on("data", function(chunk) {
		data += chunk;
	});
	resp.on("end", function() {
		console.log(data.length);
		console.log(data);
	});
	resp.on('error', console.error);
});
