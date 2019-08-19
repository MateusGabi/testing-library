const { toThrow, notThrows, test, assert, it } = require('../index')

test('assert function', () => {
	assert('it should not be null', assert !== null);
	assert('it should not be undefined', assert !== undefined);
	assert('it should be a function', (assert instanceof Function));


	assert('it should be true', true);
	
	assert('it should be throw any error', toThrow(() => {
		assert('foo', false)
	}));
		
	assert('it should be throw default error', toThrow(() => {
		assert('foo', false)
	}, "Test case doesn't match!"));


	const err = new Error('Fooo bar')
	assert('it should be throw specific', toThrow(() => {
		throw err
	}, err));


	assert('asa', false)
	
	
})

