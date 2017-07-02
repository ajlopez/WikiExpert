
var textutils = require('../textutils');

var nationalities = [ 'german', 'english', 'american' ];
var precedences = [ 'was a', 'was an', 'is a', 'is an' ];

function found(nationality, text) {
	for (var n in precedences) {
		var phrase = precedences[n] + ' ' + nationality;
		var offset = textutils.searchWord(text, phrase);
		
		if (offset >= 0)
			return true;
	}
		
	return false;
}

function process(data) {
	var text = data.text;
	
	for (var n in nationalities) {
		var nationality = nationalities[n];
		
		if (found(nationality, text))
			return 'nationality(' + data.topic + ', ' + nationality + ')';
	}
	
	return null;
}

module.exports = {
	process: process
}

