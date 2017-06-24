
function normalizeOptions(options, text) {
	options = options || {};
	
	if (options.from == null)
		options.from = 0;
	
	if (options.length == null)
		options.length = text.length - options.from;
	
	return options;
}

function searchText(text, subtext, options) {
	options = normalizeOptions(options, text);
	var result = -1;
	
	var offset = text.indexOf(subtext, options.from);
	var end = options.from + options.length - subtext.length + 1;
	
	while (offset >= 0 && offset < end) {
		result = offset;
		offset = text.indexOf(subtext, offset + subtext.length);
	}
	
	return result;
}

module.exports = {
	normalizeOptions: normalizeOptions,
	searchText: searchText
};