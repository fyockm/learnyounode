var http = require('http');
var url = require('url');

function parsetime(date) {
	return {
		"hour": date.getHours(),
		"minute": date.getMinutes(),
		"second": date.getSeconds()
	};
}

function unixtime(date) {
	return {
		"unixtime": date.getTime()
	};
}

var server = http.createServer(function(req, resp) {
	var parsed = url.parse(req.url, true);
	var path = parsed.pathname;
	var date = new Date(parsed.query.iso);
	var result =
		path === '/api/parsetime' ? parsetime(date) :
		path === '/api/unixtime' ? unixtime(date) : null;

	if (result) {
		resp.writeHead(200, {
			'Content-Type': 'application/json'
		});
		resp.end(JSON.stringify(result));
	} else {
		resp.writeHead(404);
		resp.end();
	}
});
server.listen(process.argv[2]);
