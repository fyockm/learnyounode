var through = require('through');
var split = require('split');
var out, l = 0;

var tr = through(function(line) {
  out = line.toString();
  out = l++ % 2 ? out.toUpperCase() : out.toLowerCase();
  this.queue(out + '\n');
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
