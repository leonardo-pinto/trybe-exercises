const { test, expect } = require('@jest/globals');
const {
  uppercase,
} = require('./exercise1.js');

test(`uppercase 'xablau' to equal 'XABLAU'`, done => {
  uppercase('xablau', (str) => {
    expect(str).toBe('XABLAU');
    done();
  })
})