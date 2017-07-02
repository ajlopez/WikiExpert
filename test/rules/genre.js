
var rule = require('../../lib/rules/genre.js');

exports['recognize he was'] = function (test) {
	var result = rule.process({ text: 'he was an american physicist', topic: 'richard_feynman' });
	
	test.ok(result);
	test.equal(typeof result, 'string');
	test.equal(result, 'man(richard_feynman)');
}

exports['recognize he is'] = function (test) {
	var result = rule.process({ text: 'he is an american physicist', topic: 'richard_feynman' });
	
	test.ok(result);
	test.equal(typeof result, 'string');
	test.equal(result, 'man(richard_feynman)');
}

exports['recognize she was'] = function (test) {
	var result = rule.process({ text: 'she was a naturalized-french physicist and chemist', topic: 'marie_curie' });
	
	test.ok(result);
	test.equal(typeof result, 'string');
	test.equal(result, 'woman(marie_curie)');
}

exports['recognize she is'] = function (test) {
	var result = rule.process({ text: 'she is a naturalized-french physicist and chemist', topic: 'marie_curie' });
	
	test.ok(result);
	test.equal(typeof result, 'string');
	test.equal(result, 'woman(marie_curie)');
}

exports['no genre'] = function (test) {
	var result = rule.process({ text: 'is a naturalized-french physicist and chemist', topic: 'marie_curie' });
	
	test.equal(result, null);
}

