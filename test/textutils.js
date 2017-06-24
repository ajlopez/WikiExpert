
var textutils = require('../lib/textutils');

exports['normalize null options'] = function (test) {
	var options = textutils.normalizeOptions(null, 'foo');
	
	test.ok(options);
	test.equal(options.offset, 0);
	test.equal(options.length, 3);
};

exports['normalize options without length'] = function (test) {
	var options = textutils.normalizeOptions({ offset: 1 }, 'foo');
	
	test.ok(options);
	test.equal(options.offset, 1);
	test.equal(options.length, 2);
};

exports['normalize options without offset'] = function (test) {
	var options = textutils.normalizeOptions({ length: 1 }, 'foo');
	
	test.ok(options);
	test.equal(options.offset, 0);
	test.equal(options.length, 1);
};

exports['text not found'] = function (test) {
	var offset = textutils.searchText('foo', 'bar');
	
	test.equal(offset, -1);
};

exports['text not found using length'] = function (test) {
	var offset = textutils.searchText('foo bar', 'bar', { length: 5 });
	
	test.equal(offset, -1);
};

exports['search text'] = function (test) {
	var offset = textutils.searchText('foo bar', 'bar');
	
	test.equal(offset, 4);
};

exports['search text using offset'] = function (test) {
	var offset = textutils.searchText('foo bar foo', 'foo', { offset: 4 });
	
	test.equal(offset, 8);
};

exports['digit not found'] = function (test) {
	var offset = textutils.searchDigit('foo');
	
	test.equal(offset, -1);
};

exports['digit not found using length'] = function (test) {
	var offset = textutils.searchDigit('foo 1', { length: 4 });
	
	test.equal(offset, -1);
};

exports['search digit'] = function (test) {
	var offset = textutils.searchDigit('foo 123');
	
	test.equal(offset, 4);
};

exports['search digit using offset'] = function (test) {
	var offset = textutils.searchDigit('123 bar 123', { offset: 4 });
	
	test.equal(offset, 8);
};

