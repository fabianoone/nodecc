var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	// A constante __dirname retorna o diretório raiz da aplicação.
	fs.readFile(__dirname + '/index.html', function(err, html) {
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.write(html);
		res.end();
	})
});
server.listen(3000, function(){
	console.log('Executando Site Pessoal');
});