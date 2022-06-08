var http = require('http');
var path = require('path');
var url = require('url');
var fs = require('fs');

// Gerencia rotas
var rotear = function(pathname){
	if (pathname && pathname != '/') {
		var arquivo = path.join(__dirname, `${pathname}.html`);
		var existe = fs.existsSync(arquivo);

		if (existe) {
			return arquivo;
		}

		return path.join(__dirname, 'erro.html');
	}
	return path.join(__dirname, 'artigos.html');
}

var server = http.createServer(function(req, res) {
	
	// Obtem pathname informado no browser (url)
	var pathname = url.parse(req.url, true).pathname;

	// Processa roteamento do pathname
	var pagina = rotear(pathname);

	// Renderiza a pagina html
	fs.readFile(pagina, function(err, html) {
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.end(html);
	});
	
});
server.listen(3000, () => console.log('Desafio rodando...'));