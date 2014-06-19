var http = require('http');
var fs = require('fs');
var map = require('through2-map');

var server = http.createServer(function(req, resp) {
	if (req.method !== 'POST')
		return res.end('not a POST\n');
	resp.writeHead(200, {
		'content-type': 'text/plain'
	});
	req.pipe(map(function(chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(resp);
});
server.listen(process.argv[2]);
