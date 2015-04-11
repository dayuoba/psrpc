var psrpc = require('../');

var ipcClient = psrpc.ipcConnect('/tmp/psrpcsock');

ipcClient.on('connect', function() {
	console.log('connected');
	ipcClient.write('hello');
});

ipcClient.sub(['db', 'login', 'logout']);

ipcClient.sub('db', function(data) {

});

ipcClient.sub('login', function(data) {
	
});

ipcClient.sub('logout', function(data) {
	
});

