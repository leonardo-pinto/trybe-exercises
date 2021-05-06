// função forEach executa a função passada para cada um de seus valores.
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList);

// Use o método forEach chamando a callback showEmailList para apresentar os emails.

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);
/////////////////////////////////////////////////////////////////////////////////////////////
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]
/////////////////////////////////////////////////////////////////////////////////////////////////

const numbers = [19, 21, 30, 3, 45, 22, 15];
///descobrir o primeiro número par

const even = numbers.find((number) => number % 2 === 0);
console.log(even);
/////////////////////////////////////////////////////////////////////////////
// Função some: se algum dos elementos do array retorna true;
//Veficiar se algum nome começa com a letra J
const namesList = ['Cláudio', 'João', 'Gustavo'];
const findFirstLetter = (names, letter) => names.some((name) => name[0] === letter);
console.log(findFirstLetter(namesList, 'J'));
/////////////////////////////////////////////////////////////////////////////////
// Função every: verifica se todos os elementos satisfazem a condição.
const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
)
console.log(verifyGrades(grades));
///////////////////////////////////////////////////////////////////////////
// Função sort: permite ordenar um array de acordo com alguma regra de negócio.
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
//////////////////////
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); 
///////////////////////
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]
