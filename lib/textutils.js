
function normalizeOptions(options, text) {
	options = options || {};
	
	if (options.offset == null)
		options.offset = 0;
	
	if (options.length == null)
		options.length = text.length - options.offset;
	
	return options;
}

function searchText(text, subtext, options) {
	options = normalizeOptions(options, text);
	var result = -1;
	
	var offset = text.indexOf(subtext, options.offset);
	var end = options.offset + options.length - subtext.length + 1;
	
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