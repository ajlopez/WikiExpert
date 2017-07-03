
var rule = require('../../lib/rules/nobel.js');

exports['recognize nobel in physics with year'] = function (test) {
	var result = rule.process({ text: '1965 nobel prize in physics', topic: 'richard_feynman' });
	
	test.ok(result);
	test.equal(typeof result, 'string');
	test.equal(result, 'nobel_prize(richard_feynman, physics, 1965)');
};


