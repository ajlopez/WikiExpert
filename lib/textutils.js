
function isDigit(ch) {
	return ch >= '0' && ch <= '9';
}

function isLetter(ch) {
	return ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z';
}

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

	let result = -1;
	
	let offset = text.indexOf(subtext, options.offset);
	const end = options.offset + options.length - subtext.length + 1;
	
	while (offset >= 0 && offset < end) {
		result = offset;
		offset = text.indexOf(subtext, offset + subtext.length);
	}
	
	return result;
}

function searchWord(text, word, options) {
	options = normalizeOptions(options, text);
    
	let offset = searchText(text, word, options);
	
	if (offset < 0)
		return -1;
	
	while (offset >= 0 && (isLetter(text[offset - 1]) || isLetter(text[offset + word.length])))
		offset = searchText(text, word, { offset: offset + word.length, length: options.length - offset - word.length });

	if (offset >= 0 && (isLetter(text[offset - 1]) || isLetter(text[offset + word.length])))
		return -1;
	
	return offset;
}

function searchWords(text, words, options) {
	const found = [];
	
	words.forEach(function (word) {
		if (searchWord(text, word, options) >= 0)
			found.push(word);
	});
	
	return found;
}

function searchDigit(text, options) {
	options = normalizeOptions(options, text);

	const end = options.offset + options.length;
	
	for (let k = options.offset; k < end; k++)
		if (isDigit(text[k]))
			return k;
		
	return -1;
}

function searchInteger(text, options) {
	options = normalizeOptions(options, text);
	
	const offset = searchDigit(text, options);
	
	if (offset < 0)
		return null;
	
	let value = text[offset];
	
	const end = options.offset + options.length;
	
	for (let k = offset + 1; k < end && isDigit(text[k]); k++)
		value += text[k];	
		
	return {
		offset: offset,
		value: parseInt(value)
	};
}

module.exports = {
	normalizeOptions: normalizeOptions,
	searchText: searchText,
	searchWord: searchWord,
	searchWords: searchWords,
	searchDigit: searchDigit,
	searchInteger: searchInteger
};

