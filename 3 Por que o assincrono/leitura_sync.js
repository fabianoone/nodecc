var fs = require('fs');

var leituraSync = function(arquivo) {
	console.log('Fazendo leitura síncrona');
	console.time('Bloqueio síncrono');
	fs.readFileSync(arquivo);
	console.timeEnd('Bloqueio síncrono');
};

module.exports = leituraSync;