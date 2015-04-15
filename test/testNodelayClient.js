var net = require('net');

var socket = net.connect('/tmp/domainSock');
socket.setNoDelay(true);
socket.on('connect', function listener() {
	console.log('connect');
	socket.write('data');
	socket.write('data');
	socket.write('data');
	socket.write('data');
	socket.write('data');
	socket.write('data');
	socket.write('data');
	socket.write('data');
	socket.write('data');
	socket.write('data');
});