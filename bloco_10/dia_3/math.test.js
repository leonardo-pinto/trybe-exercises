const math = require('./math');
const { test, describe, it, expect } = require('@jest/globals');
jest.mock('./math');



// 1. Faça o mock da função subtrair e teste sua chamada;

test('Testa a chamada mock da função subtrair', () => {
  math.subtrair = jest.fn()
  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();
});

// 2. Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno;

test('Teste a chamada e o retorno do mock da função multiplicar', () => {
  math.multiplicar = jest.fn().mockReturnValue(10)
  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar()).toBe(10);
})

// 3. Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.

test('Testa a chamada, retorno e os parâmetros do mock da função soma', () => {
  math.somar.mockImplementation((a, b) => a + b);
  math.somar(7, 13);
  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledWith(7, 13);
  expect(math.somar(7, 13)).toBe(20);
})

// 4. Faça o mock da função dividir e implemente um retorno padrão com valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.

test('Teste a chamada, retorno, parâmetros e número de chamadas  da função dividir', () => {
  math.dividir = jest.fn().mockReturnValue(15);
  math.dividir(2, 5);
  expect(math.dividir).toHaveBeenCalled();
  expect(math.dividir).toHaveBeenCalledWith(2, 5);
  expect(math.dividir()).toBe(15);
})

// 5. Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.

test('Teste chamadas e o retorno da função substrair, de maneira que seja possível restaurar sua implementação original', () => {
  // implementação da função original
  expect(math.subtrair(2, 2)).resolves.toBe(0);

  // cria o mock e coloca retorno padrão
  const mockSubtrair = jest.spyOn(math, 'subtrair').mockReturnValue(20);
  math.subtrair();
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair()).toBe(20);

  // restaura a implementação original
  math.subtrair.mockRestore();
  expect(math.subtrair(10, 8)).toBe(2);
})