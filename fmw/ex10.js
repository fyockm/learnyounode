var net = require('net');
var moment = require('moment');

var server = net.createServer(function(socket) {
	var date = moment().format('YYYY-MM-DD HH:mm');
	socket.end(date);
});
server.listen(process.argv[2]);
