//fibonacci
var x = 0;
var fibo3 = [1, 1, 2];

console.time('first');

function fibonacci(n) {
	x = 0;
	if (n <= 0) return 0;
	if (fibo3[n - 1]) {
		return fibo3[n - 1];
	} else {
		var len = fibo3.length;
		for (var i = 0; i < n - len; i++) {
			calculateNext(fibo3, i + len);
		}
	}
	return fibo3[n - 1];
}

function calculateNext(fibo3, index) {
	x++;
	fibo3.push(fibo3[index - 1] + fibo3[index - 2]);
}

var a = fibonacci(1000);

console.log('value is :' + a);

console.log('exec times is :' + x);

var a = fibonacci(1100);

console.log('value is :' + a);

console.log('exec times is :' + x);

var a = fibonacci(1200);

console.log('value is :' + a);

console.log('exec times is :' + x);

var a = fibonacci(1000000);

console.log('value is :' + a);

console.log('exec times is :' + x);

console.timeEnd('first');