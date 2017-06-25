
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
	
	var nday = textutils.searchInteger(text, { offset: result.offset - 3, length: 3 });
	
	if (!nday) {
		// American format (March 10, 2017)
		var nday = textutils.searchInteger(text, { offset: result.offset + result.value.length, length: 6 });
		
		if (!nday || nday.value > 31)
			return null;

		var nyear = textutils.searchInteger(text, { offset: nday.offset + nday.value.toString().length, length: 6 });
		
		if (!nyear)
			return null;
	}
	else {
		// European format (10 March 2017)
		var nyear = textutils.searchInteger(text, { offset: nday.offset + nday.value.toString().length });
		
		if (!nyear)
			return null;
	}
	
	return 'born(' + data.topic + ', ' + nyear.value + ', ' + result.number + ', ' + nday.value + ')';
}

module.exports = {
	process: process
}

