
var textutils = require('../textutils');

var professions = [ 'physicist', 'chemist', 'philosopher' ];

function process(data) {
	var text = data.text;
	
	var found = textutils.searchWords(text, ['she is', 'she was']);
	
	if (found.length)
		return 'woman(' + data.topic + ')';
	
	var found = textutils.searchWords(text, ['he is', 'he was']);
	
	if (found.length)
		return 'man(' + data.topic + ')';

	return null;
}

module.exports = {
	process: process
}

