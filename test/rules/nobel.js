
var rule = require('../../lib/rules/nobel.js');

exports['recognize nobel in physics with year'] = function (test) {
	var result = rule.process({ text: '1965 nobel prize in physics', topic: 'richard_feynman' });
	
	test.ok(result);
	test.equal(typeof result, 'string');
	test.equal(result, 'nobel_prize(richard_feynman, physics, 1965)');
};

exports['recognize nobel in chemistry with year'] = function (test) {
	var result = rule.process({ text: '1934 nobel prize in chemistry', topic: 'harold_urey' });
	
	test.ok(result);
	test.equal(typeof result, 'string');
	test.equal(result, 'nobel_prize(harold_urey, chemistry, 1934)');
};

exports['recognize nobel in chemistry with year at end'] = function (test) {
	var result = rule.process({ text: 'nobel prize in chemistry in 1934', topic: 'harold_urey' });
	
	test.ok(result);
	test.equal(typeof result, 'string');
	test.equal(result, 'nobel_prize(harold_urey, chemistry, 1934)');
};

