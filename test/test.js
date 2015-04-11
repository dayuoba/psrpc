var psrpc = require('../');


var ipcServer = psrpc.ipcServer('/tmp/psrpcsock', function listener(client) {

});

//ipcServer.listen('/tmp/psrpcsock');

ipcServer.pub('event', 'data', function feedback(client, data) {

}, function collect(clients, results) {

});

ipcServer.broadcastTo('client', 'event', 'data', function feedback(client, data) {

});

// psrpc.ipcManager.startClients(config);

// var rpcServer = psrpc.rpcServer(function listener(client) {

// });

// rpcServer.listen();