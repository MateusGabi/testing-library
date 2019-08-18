const test = (name, fn) => {
  console.log('-', name);
  fn()
}

const notThrows = func => {
	try {
		func()
	} catch(e) {
		return false;
	}
	return true;
}

const throws = func => {
	try {
		func()
	} catch(e) {
		return true;
	}
	return false;
}

const assert = (cond, desc) => {
  if (cond) {
    console.log('✔️', desc)
  } else {
    console.assert(cond, desc)
  }
}

module.exports = { test, it: test, assert, notThrows, throws }