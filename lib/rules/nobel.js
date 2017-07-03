
var textutils = require('../textutils');

var specialities = [ 'physics', 'chemistry', 'medicine' ];

function process(data) {
	var text = data.text;
	
	var result = textutils.searchWord(text, 'nobel prize in');
	
	if (!result)
		return null;
	
	var nyear = textutils.searchInteger(text, { offset: result.offset - 5, length: 4 });
	
	if (!nyear)
		return null;
	
	var specs = textutils.searchWords(text, specialities, { offset: result.offset + result.value.length, length: 30 });
	
	if (specs.length === 0)
		return null;
	
	if (specs.length === 1)
		return 'nobel_prize(' + data.topic + ', ' + specs[0] + ', ' + nyear +')';
	
	var facts = [];
	
	specs.forEach(function (spec) {
		facts.push('nobel_prize(' + data.topic + ', ' + spec + ', ' + nyear +')')
	});
	
	return facts;
}

module.exports = {
	process: process
}

