var net = require('net');
var fs = require('fs');
var domainSock = '/tmp/domainSock';

var server = net.Server(function handle(socket) {
	socket.setNoDelay(true);
	socket.on('data', function(data) {
		console.log('*');
		console.log(data.toString());
		console.log('*');
	});
});

server.listen(domainSock);

server.on('error', function(e) {
	if (e.code == 'EADDRINUSE') {
		console.log('Address in use, retrying after 1minute..');
		setTimeout(function() {
			try {
				fs.unlinkSync(domainSock);
				//server.close();
			} catch (e) {
				console.log(e);
			}
			server.listen(domainSock);
		}, 1000);
	}
});