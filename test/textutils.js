
var textutils = require('../lib/textutils');

exports['normalize null options'] = function (test) {
	var options = textutils.normalizeOptions(null, 'foo');
	
	test.ok(options);
	test.equal(options.from, 0);
	test.equal(options.length, 3);
};

exports['normalize options without length'] = function (test) {
	var options = textutils.normalizeOptions({ from: 1 }, 'foo');
	
	test.ok(options);
	test.equal(options.from, 1);
	test.equal(options.length, 2);
};

exports['normalize options without offset'] = function (test) {
	var options = textutils.normalizeOptions({ length: 1 }, 'foo');
	
	test.ok(options);
	test.equal(options.from, 0);
	test.equal(options.length, 1);
};
