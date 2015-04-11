var net = require('net');

var psrpc = module.exports = {
	subEvents: {}
};

psrpc.ipcServer = function(domainSock, listener) {
	if (typeof listener !== 'function') throw new Error('Server listener must be a function');
	var ipcServer = net.createServer(function parseMessage(client) {
		client.on('data', function(data) {
			console.log(data);
		});
		listener(client);
	});
	this.initIPCServer(domainSock, ipcServer);
	return ipcServer;
};

psrpc.initIPCServer = function(domainSock, ipcServer) {
	ipcServer.pub = function(event, data, feedback, collect) {};
	ipcServer.broadcastTo = function(client, event, data, feedback) {};
	ipcServer.listen(domainSock);
};

psrpc.ipcConnect = function(path) {
	var ipcClient = net.createConnection(path);
	this.initIPCClient(ipcClient);
	return ipcClient;
};

psrpc.initIPCClient = function(ipcClient) {
	ipcClient.sub = function() {};
};