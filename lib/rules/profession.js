
var textutils = require('../textutils');

var professions = [ 'physicist', 'chemist', 'philosopher' ];

function process(data) {
	var text = data.text;
	
	var found = textutils.searchWords(text, professions);
	
	if (found.length == 0)
		return null;
	
	return 'profession(' + data.topic + ', ' + found[0] + ')';
}

module.exports = {
	process: process
}

