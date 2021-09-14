/* Parte 1 - Adcionando novas chaves (keys)
Duas principais maneira de adicionar uma nova propriedade a um objeto:

objeto.nomeDaPropriedade = 'valor';
objeto[variavelQueContemONomeDaPropriedade] = 'valor;
*/

const leonardo = {
  idade: 28,
  esporte: 'musculacao',
  profissao: 'fisico',
}
leonardo.salario = 2200; //Adiciona nova chave através do nome da propriedade;
let newKey = 'nacionalidade';
leonardo[newKey] = 'brasileiro'; //Adiciona nova chave através de variável;
//console.log(leonardo);

// Crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor;
// O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

function insertKey(object, chave, valor) {
  object[chave] = valor;
  return object;
}
console.log(insertKey(leonardo, 'cidade', 'jundiai'));

/* Parte 2 - Object.keys
Lista as chaves de um objeto, retornando um array */

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

//Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade".

function exibeHabilidades (object) {
  const habilidades = Object.keys(object);
  const nivel = Object.values(object);
  for (let index = 0; index < habilidades.length; index += 1) {
    console.log(`${habilidades[index]}, Nível: ${nivel[index]}`);
  }
}
exibeHabilidades(student1);

/* Parte 3 - Object.values: lista os valores de cada chave */

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const skills = object => Object.values(student1);

console.log(skills(student1));

/* Parte 4 - Object.entries: retorna um array com os pares chave/valor; */

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
for (index in pairKeyValue) {
  console.log(`-------------------------------`);
  console.log(`País: ${pairKeyValue[index][0]}`);
  console.log(`Capital: ${pairKeyValue[index][1]}`);
};
console.log(pairKeyValue);

/* Parte 5 - Object.assign: copia os valores de todas as propriedades de um ou mais objetos;
Object.assign(destino, obj1, obj2); Caso haja propriedades repetidas, elas serão sobrescrevidas; */

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

////////////////////////////////////////////////

const person = {
  name: 'Leonardo',
};

const lastName = {
  lastName: 'Pinto',
};

const clone = Object.assign(person, lastName);
//console.log(clone);
//console.log(person);

clone.name = 'Reginaldo';
console.log(clone);
console.log(person);

/////////////////////////////////////////////////

// Para que a alteração no clone não afete o objeto original, devemos salvá-lo como uma variével em um objeto vazio;
const person = {
  name: 'Leonardo',
};

const lastName = {
  lastName: 'Pinto',
};

const newPerson = Object.assign({}, person, lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);


