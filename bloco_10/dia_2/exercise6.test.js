const { test, describe, it, expect } = require('@jest/globals');
const { findAnimalByName ,
getAnimal,
findAnimalByAge,
getAnimalByAge,
} = require('./exercise6.js');


describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    it('Animais com idade de 5 retorna apenas um objeto', () => {
      expect.assertions(1);
      return getAnimalByAge(5).then(animal => {
        expect(animal).toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }]);
      });
    })
  })
  describe('Quando não existe o animal com a idade procurada', () => {
    it('Não existem animais com idade de 50', () => {
      expect.assertions(1);
      return getAnimalByAge(50).catch(error => expect(error).toEqual('Nenhum animal com essa idade'));
    });
  });
})