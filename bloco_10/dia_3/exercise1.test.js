const exercise1 = require('./exercise1');
const { test, describe, it, expect } = require('@jest/globals');

//Exercício 1
test('Testa mock da função random com chamadas, retorno e número de chamadas', () => {
  exercise1.random = jest.fn().mockReturnValue(10);
  exercise1.random();
  expect(exercise1.random).toHaveBeenCalled();
  expect(exercise1.random()).toBe(10);
  expect(exercise1.random).toHaveBeenCalledTimes(2);
})

//Exercício 2
test('Testa nova implementação do mock com dois parâmetros', () => {
  exercise1.random = jest.fn().mockImplementation((a, b) => a / b);
  
  expect(exercise1.random(10, 2)).toBe(5);
  expect(exercise1.random).toHaveBeenCalled();
  expect(exercise1.random).toHaveBeenCalledWith(10, 2);
})

//Exercício 3
describe('Testando implementação mock', () => {
  test('Testa implementação para receber 3 parâmetros', () => {
    exercise1.random = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(exercise1.random(2, 3, 5)).toBe(30);
    expect(exercise1.random).toHaveBeenCalled();
    expect(exercise1.random).toHaveBeenCalledWith(2, 3, 5);  
  })
  test('Testa implementação para receber 1 parâmetro', () => {
    exercise1.random.mockReset();
    exercise1.random = jest.fn().mockImplementation((a) => 2 * a);
    expect(exercise1.random(30)).toBe(60);
    expect(exercise1.random).toHaveBeenCalled();
    expect(exercise1.random).toHaveBeenCalledWith(30);
  })
})
  