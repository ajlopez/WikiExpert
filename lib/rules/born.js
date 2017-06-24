
var textutils = require('../textutils');

var months = [ 'january', 'february', 'march' ];

var nmonths = months.length;

function searchMonth(text, options) {
	options = textutils.normalizeOptions(options, text);
	
	var result;
	
	for (var k = 0; k < nmonths; k++) {
		var offset = textutils.searchWord(text, months[k], options);
		
		if (offset < 0)
			continue;
		
		if (!result || result.offset > offset)
			result = { offset: offset, value: months[k], number: k + 1};
	}
	
	return result;
}


function process(data) {
	var text = data.text;
	
	var result = searchMonth(text);
	
	if (!result)
		return null;
	
	var nday = textutils.searchInteger(text, { length: result.offset });
	
	if (!nday)
		return null;
	
	var nyear = textutils.searchInteger(text, { offset: nday.offset + nday.value.toString().length });
	
	if (!nyear)
		return null;
	
	return 'born(' + data.topic + ', ' + nyear.value + ', ' + result.number + ', ' + nday.value + ')';
}

module.exports = {
	process: process
}

