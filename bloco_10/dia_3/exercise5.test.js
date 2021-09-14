const exercise4 = require('./exercise4');
const { test, describe, it, expect } = require('@jest/globals');

test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
  const mockLowerCase = jest
  .spyOn(exercise4, 'stringUpperCase') 
  .mockImplementation((str) => str.toLowerCase());

  expect(mockLowerCase('XABLAU')).toBe('xablau');
  expect(mockLowerCase).toHaveBeenCalled();

  exercise4.stringUpperCase.mockRestore();

  expect(exercise4.stringUpperCase('xablau')).toBe('XABLAU');
})