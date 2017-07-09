
var textutils = require('../textutils');

var specialities = [ 'physics', 'chemistry', 'medicine', 'physiology' ];

function process(data) {
	var text = data.text;
	
	var result = textutils.searchWord(text, 'nobel prize in');
	
	if (result == null)
		return null;
	
	var nyear = textutils.searchInteger(text, { offset: result - 5, length: 4 });
	
	var specs = textutils.searchWords(text, specialities, { offset: result + 'nobel prize in'.length, length: 30 });
	
	if (specs.length === 0)
		return null;
	
	if (!nyear)
		nyear = textutils.searchInteger(text, { offset: result, length: text.length - result });
	
	if (!nyear)
		return null;

	if (specs.length === 1)
		return 'nobel_prize(' + data.topic + ', ' + specs[0] + ', ' + nyear.value + ')';
	
	var facts = [];
	
	specs.forEach(function (spec) {
		facts.push('nobel_prize(' + data.topic + ', ' + spec + ', ' + nyear.value +')')
	});
	
	return facts;
}

module.exports = {
	process: process
}

