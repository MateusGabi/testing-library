const {throws, notThrows, test, assert, it } = require('../index')

test("dumb interview question", () => {
  const result = 7;
  assert(result === 7, "addition")
})


test('throwing errors', () => {

	function thowingFunc() {
		throw new Error('');
	}
	
	function notThowingFunc() {
		// throw new Error('');
	}

	assert(throws(thowingFunc), 'should catch throws')
	assert(notThrows(notThowingFunc), 'should not catch throws')
})