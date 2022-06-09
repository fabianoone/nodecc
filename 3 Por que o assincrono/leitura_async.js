var fs = require('fs');

var leituraAsync = function(arquivo) {
	console.log('Fazendo leitura assíncrona. ');
	console.time('Bloqueio assíncrono');
	// Função callback vazia apenas para testar bloqueio assíncrono
	fs.readFile(arquivo, () => {});
	console.timeEnd('Bloqueio assíncrono');
};

module.exports = leituraAsync;