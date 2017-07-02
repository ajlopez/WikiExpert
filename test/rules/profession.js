
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

exports['recognize philosopher profession'] = function (test) {
	var result = rule.process({ text: 'he was a british philosopher', topic: 'david_hume' });
	
	test.ok(result);
	test.equal(typeof result, 'string');
	test.equal(result, 'profession(david_hume, philosopher)');
}
