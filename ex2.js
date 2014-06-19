var sum = 0;
process.argv.slice(2).forEach(function(num) {
	sum += +num;
})
console.log(sum);
