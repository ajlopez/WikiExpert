
var rule = require('../../lib/rules/profession.js');

exports['recognize physicist profession'] = function (test) {
	var result = rule.process({ text: 'he was an american physicist', topic: 'richard_feynman' });
	
	test.ok(result);
	test.equal(typeof result, 'string');
	test.equal(result, 'profession(richard_feynman, physicist)');
}

exports['recognize chemist profession'] = function (test) {
	var result = rule.process({ text: 'he was an american chemist', topic: 'harold_urey' });
	
	test.ok(result);
	test.equal(typeof result, 'string');
	test.equal(result, 'profession(harold_urey, chemist)');
}

exports['recognize two professions'] = function (test) {
	var result = rule.process({ text: 'she was a naturalized-french physicist and chemist', topic: 'marie_curie' });
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 2);
	test.equal(result[0], 'profession(marie_curie, physicist)');
	test.equal(result[1], 'profession(marie_curie, chemist)');
}

exports['recognize philosopher profession'] = function (test) {
	var result = rule.process({ text: 'he was a british philosopher', topic: 'david_hume' });
	
	test.ok(result);
	test.equal(typeof result, 'string');
	test.equal(result, 'profession(david_hume, philosopher)');
}

exports['recognize biologist, geneticist, zoologist professions'] = function (test) {
	var result = rule.process({ text: 'is an american molecular biologist, geneticist and zoologist', topic: 'james_watson' });
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 3);
	test.ok(result.indexOf('profession(james_watson, biologist)') >= 0);
	test.ok(result.indexOf('profession(james_watson, zoologist)') >= 0);
	test.ok(result.indexOf('profession(james_watson, geneticist)') >= 0);
}

exports['no profession'] = function (test) {
	var result = rule.process({ text: 'he was a british', topic: 'david_hume' });
	
	test.equal(result, null);
}
