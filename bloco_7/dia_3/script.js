const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

//Teste se o retorno de sum(4, 5) é 9
//assert.strictEqual(sum(4,5), 9);

//Teste se o retorno de sum(0, 0) é 0
//assert.strictEqual(sum(0,0), 0);

//Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
/*assert.throws(() => {
  sum(4,"5");
});*/

//Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
/* assert.throws(() => {
  sum(4,'5');
}, /^Error: parameters must be numbers$/); */

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

//Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
//assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

//Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
//assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

//Verifique se o array passado por parâmetro não sofreu alterações


//Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
//assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4])

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

//Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
//assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

//Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
//assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
//Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
//Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

//Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz')

//Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(9), 'fizz')
//Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(10), 'buzz')
//Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(8), 8)
//Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

//Compare dois objetos (JSON) para verificar se são idênticos ou não
assert.deepStrictEqual(obj1, obj3);
///////////////////////////////////////////


const assert = require('assert');
const addOne = (arr) => {
  let output = [];
  for (let index = 0; index < arr.length; index += 1) {
    output.push(arr[index] + 1);
  }
  return output;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
///////////////////////////////////////////////////


const assert = require('assert');
const wordLengths = (arr) => {
  let output = [];
  for (let index = 0; index < arr.length; index += 1) {
    output.push(arr[index].length);
  }
  return output;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
////////////////////////////////////////////////


const assert = require('assert');
const sumAllNumbers = (arr) => {
  let sommatory = 0;
  for (let index = 0; index < arr.length; index += 1) {
    sommatory += arr[index];
  }
  return sommatory;

}
const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
////////////////////////////////////////////


const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (arr) => {
  let needleIndex;
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === 'needle') {
      needleIndex = index;
    }
  }
  return needleIndex;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);