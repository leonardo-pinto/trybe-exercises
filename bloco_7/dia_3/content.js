const assert = require('assert'); // sintaxe para incluir o modo assert

assert.strictEqual(50,10);
////////////////////////////////
const assert = require('assert');

const division = (x,y) => x/y;

const expected = division(9,3);

assert.strictEqual(expected, 3, 'errou');
assert.ok(expected === 3);

/* 
.equal==; 
.strictequal===; 
.notstrictequal!===;
.deepstrictequal=== com objetos e arrays;
.ok checa se o argumento é verdadeiro
.fail checa se o argumento é falso;
*/ 

const assert = require('assert');

const list1 = [1, 2, 3, 4];
const list2 = [1, 2, 3, 4];

assert.deepStrictEqual(list1, list2, 'Erro: list1 e list2 não são iguais'); 
// no caso de objetos e arrays, .strictEqual daria erro.

const division = (x,y) => {
  if (y === 0) throw new Error ('parameter y must not be 0');
  return x/y;
}
const assert = require('assert');
assert.strictEqual(division(10,5), 2);
assert.strictEqual(division(10,0), 0);
///////////////////////////////////////

const assert = require('assert');
assert.strictEqual(typeof myFunction, 'function');
