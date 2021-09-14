
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce ((acc, curr) => 
    acc + curr.split('').reduce((acc1, curr1) => {
      if (curr1 === 'a' || curr1 === 'A') {
        return acc1 + 1;
      }
      return acc1
    }, 0), 0)
}
console.log(containsA());
//assert.deepStrictEqual(containsA(), 20);

//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.