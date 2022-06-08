var http = require('http');

var server = http.createServer(function (req, res) {
	res.writeHeader(200, {'Content-Type': 'text/html'})
	res.write('<h1>Hello World</h1>');
	res.end();
});

server.listen(3000, function () {
	console.log('Servidor rodando: http://localhost:3000/');
});