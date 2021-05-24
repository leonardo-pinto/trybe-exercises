const exercise4 = require('./exercise4');
const { test, describe, it, expect } = require('@jest/globals');
jest.mock('./exercise4');

test('Mock da primeira função implementando o retorno da string em caixa baixa', () => {
  exercise4.stringUpperCase.mockImplementation((str) => str.toLowerCase(str));

  expect(exercise4.stringUpperCase('XABLAU')).toBe('xablau');
  expect(exercise4.stringUpperCase).toHaveBeenCalled();
})

