
var textutils = require('../textutils');

var professions = [ 'physicist', 'chemist', 'philosopher' ];

function process(data) {
	var text = data.text;
	
	var found = textutils.searchWords(text, professions);
	
	if (found.length == 0)
		return null;

	if (found.length == 1)
		return 'profession(' + data.topic + ', ' + found[0] + ')';
	
	var result = [];
	
	found.forEach(function (profession) {
		result.push('profession(' + data.topic + ', ' + profession + ')');
	});
	
	return result;
}

module.exports = {
	process: process
}

