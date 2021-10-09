const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor do que 7', () => {
  it('retorna "reprovado', () => {
    const resposta = calculaSituacao(4);
    expect(resposta).equals('reprovado');
  });
});

describe('Quando a média for maior do que 7', () => {
  it('retorna aprovado', () => {
    const resposta = calculaSituacao(9);
    expect(resposta).equals('aprovado');
  });
});

describe('Quando a média igual a 7', () => {
  it('retorna "aprovado', () => {
    const resposta = calculaSituacao(7);
    expect(resposta).equals('aprovado');
  });
});
