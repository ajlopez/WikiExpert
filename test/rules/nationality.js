
var rule = require('../../lib/rules/nationality.js');

exports['recognize English nationality'] = function (test) {
	var result = rule.process({ text: 'he was an english', topic: 'paul_dirac' });
	
	test.ok(result);
	test.equal(typeof result, 'string');
	test.equal(result, 'nationality(paul_dirac, english)');
}

exports['no nationality'] = function (test) {
	var result = rule.process({ text: 'he was an', topic: 'paul_dirac' });
	
	test.equal(result, null);
}

exports['recognize German nationality'] = function (test) {
	var result = rule.process({ text: 'was a german', topic: 'albert_einstein' });
	
	test.ok(result);
	test.equal(typeof result, 'string');
	test.equal(result, 'nationality(albert_einstein, german)');
}

