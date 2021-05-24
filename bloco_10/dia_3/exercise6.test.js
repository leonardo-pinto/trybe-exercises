const exercise6 = require('./exercise6');
const { test, describe, it, expect } = require('@jest/globals');

describe('testando a requisição', () => {
  exercise6.fetchDog = jest.fn();
  afterEach(exercise6.fetchDog.mockReset());

  test('testando a requisição caso a promise resolva', async () => {
    exercise6.fetchDog.mockResolvedValue('request success');
    exercise6.fetchDog();
    expect(exercise6.fetchDog).toHaveBeenCalled();
    expect(exercise6.fetchDog()).resolves.toBe('request success')
  });

  test('testando a requisição caso a promise não resolva', async () => {
    exercise6.fetchDog.mockResolvedValue('request failed');
    exercise6.fetchDog();
    expect(exercise6.fetchDog).toHaveBeenCalled();
    expect(exercise6.fetchDog()).rejects.toMatch('request failed')
  });
})