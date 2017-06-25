
var rule = require('../../lib/rules/born.js');

exports['recognize born date'] = function (test) {
	var result = rule.process({ text: '14 march 1879', topic: 'albert_einstein' });
	
	test.ok(result);
	test.equal(typeof result, 'string');
	test.equal(result, 'born(albert_einstein, 1879, 3, 14)');
}

exports['recognize born date with additional number before date'] = function (test) {
	var result = rule.process({ text: '7 things 14 march 1879', topic: 'albert_einstein' });
	
	test.ok(result);
	test.equal(typeof result, 'string');
	test.equal(result, 'born(albert_einstein, 1879, 3, 14)');
}

exports['recognize born date one digit day with spaces'] = function (test) {
	var result = rule.process({ text: ' 1 march 1879', topic: 'albert_einstein' });
	
	test.ok(result);
	test.equal(typeof result, 'string');
	test.equal(result, 'born(albert_einstein, 1879, 3, 1)');
}

exports['recognize born date american format'] = function (test) {
	var result = rule.process({ text: 'march 14, 1879', topic: 'albert_einstein' });
	
	test.ok(result);
	test.equal(typeof result, 'string');
	test.equal(result, 'born(albert_einstein, 1879, 3, 14)');
}

exports['born date should have day number'] = function (test) {
	var result = rule.process({ text: 'march 1879', topic: 'albert_einstein' });
	
	test.equal(result, null);
}

exports['born date should have English month name'] = function (test) {
	var result = rule.process({ text: '14 marzo 1879', topic: 'albert_einstein' });
	
	test.equal(result, null);
}

exports['born date should have English month name without additions'] = function (test) {
	test.equal(rule.process({ text: '14 marchx 1879', topic: 'albert_einstein' }), null);
	test.equal(rule.process({ text: '14 xmarch 1879', topic: 'albert_einstein' }), null);
}

exports['born date should have year number'] = function (test) {
	var result = rule.process({ text: '14 march', topic: 'albert_einstein' });
	
	test.equal(result, null);
}
