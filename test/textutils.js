
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

exports['integer not found'] = function (test) {
	var result = textutils.searchInteger('foo');
	
	test.equal(result, null);
};

exports['integer not found using length'] = function (test) {
	var result = textutils.searchInteger('foo 42', { length: 4 });
	
	test.equal(result, null);
};

exports['search integer'] = function (test) {
	var result = textutils.searchInteger('foo 42');
	
	test.ok(result);
	test.deepEqual(result, { offset: 4, value: 42 });
};

exports['search integer using offset'] = function (test) {
	var result = textutils.searchInteger('123 bar 123', { offset: 4 });
	
	test.ok(result);
	test.deepEqual(result, { offset: 8, value: 123 });
};

exports['word not found because prefix'] = function (test) {
	var offset = textutils.searchWord('xfoo', 'foo');
	
	test.equal(offset, -1);
};

exports['word not found because suffix'] = function (test) {
	var offset = textutils.searchWord('foox', 'foo');
	
	test.equal(offset, -1);
};

exports['word not found using length'] = function (test) {
	var offset = textutils.searchWord('foo bar', 'bar', { length: 5 });
	
	test.equal(offset, -1);
};

exports['search word'] = function (test) {
	var offset = textutils.searchWord('foo bar', 'bar');
	
	test.equal(offset, 4);
};

exports['search word using offset'] = function (test) {
	var offset = textutils.searchWord('foo bar foo', 'foo', { offset: 4 });
	
	test.equal(offset, 8);
};

