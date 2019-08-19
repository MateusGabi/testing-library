const test = (name, fn) => {
  console.log('-', name);
  fn()
}

const notThrow = func => {
	return !toThrow(func)
}

const toThrow = (func, error) => {
	try {
		func()
	} catch(e) {
			if (error instanceof String) {			
				return e.toString() === `Error: ${errorMessage}`
			}
			if (error instanceof Object) {			
				return e.toString() === e.toString()
			}
		return true;
	}
	return false;
}

const assert = (desc, cond) => {
  if (cond) {
    console.log('✔️', desc)
  } else {
    //console.assert(cond, desc)
//		process.exit(1);
    throw new Error(`Test case doesn't match!`)
  }
}

module.exports = { test, it: assert, assert, notThrow, toThrow }