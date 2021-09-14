const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  return arrays.reduce((accumulator, element) => accumulator.concat(element))
}
console.log(flatten())
//Dada uma matriz de matrizes, transforme em uma única matriz.
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);