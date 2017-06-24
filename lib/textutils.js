
function normalizeOptions(options, text) {
	options = options || {};
	
	if (options.from == null)
		options.from = 0;
	
	if (options.length == null)
		options.length = text.length - options.from;
	
	return options;
}

module.exports = {
	normalizeOptions: normalizeOptions
};