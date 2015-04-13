var net = require('net');
var fs = require('fs');
var psrpc = module.exports = {

};

psrpc.ipcServer = function(domainSock, listener) {
	if (typeof listener !== 'function') throw new Error('Server listener must be a function');
	var self = this;
	var ipcServer = net.createServer(function parseMessage(client) {
		//console.log(client);
		ipcServer.clients.push(new ipcServer.Client(client));
		client.on('data', function(data) {
			console.log(data);
		});

		listener(client);
	});
	this.initIPCServer(domainSock, ipcServer);
	return ipcServer;
};

psrpc.initIPCServer = function(domainSock, ipcServer) {
	ipcServer.clients = [];
	ipcServer.Client = function(client) {
		this.id = client._handle.fd;
		this.client = client;
		this.alias = function(name) {
			this.clientName = name;
		};
		this.subEvents = [];
	}

	ipcServer.pub = function(event, data, feedback, collect) {
		//select clients subcribed the event
		//send data,listen feedback,collection 
		var subClients = [];
		if (this.clients.length === 0) return;
		this.clients.forEach(function(client) {
			var hasSubed = false;
			client.subEvents.forEach(function iterator(subEvent) {
				if (subEvent === event) hasSubed = true;
			});
			if (hasSubed) client.client.write('' + event + data);
		});
	};

	ipcServer.broadcastTo = function(client, event, data, feedback) {

	};

	ipcServer.listen(domainSock);

	ipcServer.on('error', function(e) {
		if (e.code == 'EADDRINUSE') {
			console.log('Address in use, retrying after 1minute..');
			setTimeout(function() {
				try {
					fs.unlinkSync(domainSock);
					//ipcServer.close();
				} catch (e) {
					console.log(e);
				}
				ipcServer.listen(domainSock);
			}, 1000);
		}
	});

	ipcServer.on('listening', function() {
		console.log('ipcServer working');
	});
};

psrpc.ipcConnect = function(path) {
	var ipcClient = net.createConnection(path);
	this.initIPCClient(ipcClient);
	return ipcClient;
};

psrpc.initIPCClient = function(ipcClient) {
	parseMessage(ipcClient);
	console.log(ipcClient);
	ipcClient.sub = function(event, listener) {

	};
};

function parseMessage(client) {
	client.on('data', function(data) {

	});
}