var psrpc = require('../');

var ipcClient = psrpc.ipcConnect('/tmp/psrpcsock');

ipcClient.on('connect', function() {
	console.log('connected');
});

ipcClient.sub('db', function(data) {

});

ipcClient.sub('login', function(data) {
	
});

ipcClient.sub('login', function(data) {

});

ipcClient.sub('login', function(data) {

});
ipcClient.sub('login', function(data) {

});
ipcClient.sub('login', function(data) {

});
ipcClient.sub('db', function(data) {

});

ipcClient.sub('login', function(data) {
	
});

ipcClient.sub('login', function(data) {

});

ipcClient.sub('login', function(data) {

});
ipcClient.sub('login', function(data) {

});
ipcClient.sub('login', function(data) {

});



