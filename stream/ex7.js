var http = require('http');
var through = require('through');

var server = http.createServer(function(req, res) {
  if (req.method !== 'POST')
    return res.end('Error: only POST accepted\n');

  req.pipe(through(function(buf) {
    this.queue(buf.toString().toUpperCase());
  })).pipe(res);
});
server.listen(process.argv[2]);
